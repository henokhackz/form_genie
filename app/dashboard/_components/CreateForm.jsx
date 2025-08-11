"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AiChatSession } from '@/configs/AiModal'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs'
import { JsonForms } from '@/configs/schema'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { desc, eq } from 'drizzle-orm'
import { Label } from '@radix-ui/react-label'

const PROMPT=",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle,FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format"
function CreateForm() {
    const [openDialog,setOpenDailog]=useState(false)
    const [userInput,setUserInput]=useState();
    const [loading,setLoading]=useState();
    const {user}=useUser();
    const route=useRouter();
 

    const [formList,setFormList]=useState();
  

    useEffect(()=>{
      
        user&&GetFormList()
    },[user])

    const GetFormList=async()=>{
        const result=await db.select().from(JsonForms)
        .where(eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(JsonForms.id));

        setFormList(result);
        
       
    }
    const onCreateForm=async()=>{
       
        if(formList?.length==3)
        {
            toast('Upgrade to create unlimted form')
            return;
        }
        setLoading(true)
      const result= await AiChatSession.sendMessage("Description:"+userInput+PROMPT);
      console.log(result.response.text());
      if(result.response.text())
      {
        const resp=await db.insert(JsonForms)
        .values({
            jsonform:result.response.text(),
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy')
        }).returning({id:JsonForms.id});

        console.log("New Form ID",resp[0].id);
        if(resp[0].id)
        {
            route.push('/edit-form/'+resp[0].id)
        }
        setLoading(false);
      }
      setLoading(false);
    }
    return (
        <div>
            <Button  onClick={()=>setOpenDailog(true)} className='w-full bg-neomorphic-primary text-white hover:bg-neomorphic-primary-light'>+ Create Form</Button>
            <Dialog open={openDialog}>
               
                <DialogContent className='bg-white text-gray-800'>
                    <DialogHeader>
                        <DialogTitle>Create new form </DialogTitle>
                        <DialogDescription className='text-gray-500 bg-white'>
                        <Label className='text-xs'>Enter Form Description</Label>
                        <Textarea
                            className="my-2 text border-none text-gray-500 focus:ring-0 focus:ring-offset-0 bg-white"
                            onChange={(event) => setUserInput(event.target.value)}
                            placeholder="Enter form description"
                            />

                        <div className='flex gap-2 my-3 justify-end'>
                            <Button 
                            onClick={()=>setOpenDailog(false)}
                            variant="outline bg-transparent">Cancel</Button>
                            <Button 
                                className='bg-neomorphic-primary text-white hover:bg-neomorphic-primary-light'
                                disabled={loading}
                            onClick={()=>onCreateForm()}>
                                {loading?
                                <Loader2 className='animate-spin' />:'Create'    
                            }
                                </Button>

                        </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CreateForm