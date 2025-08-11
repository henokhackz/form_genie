"use client";

import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import FieldEdit from "./FieldEdit";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import moment from "moment";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function FormUi({
  jsonForm,
  selectedTheme,
  selectedStyle,
  onFieldUpdate,
  deleteField,
  editable = true,
  formId = 0,
  enabledSignIn = false,
}) {
  const [formData, setFormData] = useState({});
  let formRef = useRef();
  const { user, isSignedIn } = useUser();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (fieldName, itemName, checked) => {
    const list = formData?.[fieldName] ? [...formData[fieldName]] : [];

    if (checked) {
      list.push({ label: itemName, value: checked });
    } else {
      const filtered = list.filter((item) => item.label !== itemName);
      setFormData({
        ...formData,
        [fieldName]: filtered,
      });
      return;
    }

    setFormData({
      ...formData,
      [fieldName]: list,
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await db.insert(userResponses).values({
        jsonResponse: formData,
        createdAt: moment().format("DD/MM/YYYY"),
        formRef: formId,
      });

      if (result) {
        formRef.reset();
        toast.success("Response Submitted Successfully!");
      } else {
        toast.error("Error while saving your form!");
      }
    } catch (err) {
      toast.error("Error while saving your form!");
      console.error(err);
    }
  };

  return (
    <>
      <form
        ref={(e) => (formRef = e)}
        onSubmit={onFormSubmit}
        className="border border-gray-300 p-6 md:w-[600px] rounded-lg bg-neomorphic-bg"
        data-theme={selectedTheme}
        style={{
          boxShadow: selectedStyle?.key === "boxshadow" && "5px 5px 0px black",
          border: selectedStyle?.key === "border" && selectedStyle.value,
        }}
      >
        <h2 className="font-bold text-center text-2xl text-gray-900">
          {jsonForm?.formTitle}
        </h2>
        <h2 className="text-sm text-gray-500 text-center mb-6">
          {jsonForm?.formHeading}
        </h2>

        {jsonForm?.fields?.map((field, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            {field.fieldType === "select" ? (
              <>
                <Label className="text-xs text-gray-600">{field.label}</Label>
                <Select
                  required={field?.required}
                  onValueChange={(v) => handleSelectChange(field.fieldName, v)}
                >
                  <SelectTrigger className="w-full bg-transparent border border-gray-300 rounded-md">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((item, i) => (
                      <SelectItem key={i} value={item.label ?? item}>
                        {item.label ?? item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            ) : field.fieldType === "radio" ? (
              <>
                <Label className="text-xs text-gray-600">{field.label}</Label>
                <RadioGroup required={field?.required}>
                  {field.options.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 mb-1">
                      <RadioGroupItem
                        value={item.label}
                        id={`${field.fieldName}-${item.label}`}
                        onClick={() =>
                          handleSelectChange(field.fieldName, item.label)
                        }
                      />
                      <Label htmlFor={`${field.fieldName}-${item.label}`}>
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : field.fieldType === "checkbox" ? (
              <>
                <Label className="text-xs text-gray-600">{field.label}</Label>
                {field?.options ? (
                  field.options.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mb-1">
                      <Checkbox
                        onCheckedChange={(v) =>
                          handleCheckboxChange(field.fieldName, item.label ?? item, v)
                        }
                      />
                      <span className="text-gray-700">{item.label ?? item}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-2">
                    <Checkbox required={field.required} />
                    <span className="text-gray-700">{field.label}</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <Label className="text-xs text-gray-600">{field.label}</Label>
                <Input
                  type={field?.type}
                  placeholder={field.placeholder}
                  name={field.fieldName}
                  className="bg-transparent border border-gray-300 rounded-md"
                  required={field?.required}
                  onChange={handleInputChange}
                />
              </>
            )}

            {editable && (
              <div className="flex justify-end">
                <FieldEdit
                  defaultValue={field}
                  onUpdate={(value) => onFieldUpdate(value, index)}
                  deleteField={() => deleteField(index)}
                />
              </div>
            )}
          </div>
        ))}

        {!enabledSignIn ? (
          <Button type="submit" className="hover:bg-neomorphic-primary-light w-full">
            Submit
          </Button>
        ) : isSignedIn ? (
          <Button type="submit" className="btn btn-primary w-full">
            Submit
          </Button>
        ) : (
          <Button className="w-full">
            <SignInButton mode="modal">Sign In before Submit</SignInButton>
          </Button>
        )}
      </form>
    </>
  );
}

export default FormUi;
