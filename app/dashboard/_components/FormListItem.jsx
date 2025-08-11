"use client";

import { Button } from "@/components/ui/button";
import { Edit, Share, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
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
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { toast } from "sonner";
import { RWebShare } from "react-web-share";

function FormListItem({ formRecord, jsonForm, refreshData }) {
  const { user } = useUser();

  const onDeleteForm = async () => {
    const result = await db
      .delete(JsonForms)
      .where(
        and(
          eq(JsonForms.id, formRecord.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    if (result) {
      toast.success("Form deleted successfully!");
      refreshData();
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md border border-gray-200
                 p-5 flex flex-col gap-4
                 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Top bar: Title and Delete */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 truncate">
          {jsonForm?.formTitle}
        </h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash
              className="h-6 w-6 text-red-500 cursor-pointer
                         hover:text-red-700 transition-colors duration-200"
            />
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-md bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg font-semibold text-gray-900">
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription className="mt-2 text-gray-600 bg-white">
                This action cannot be undone. This will permanently delete your
                form and remove all associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-gray-700 hover:text-gray-900">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={onDeleteForm}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500">{jsonForm?.formHeading}</p>

      <hr className="border-gray-300" />

      {/* Action buttons */}
      <div className="flex justify-between items-center gap-3">
        <RWebShare
          data={{
            text:
              jsonForm?.formHeading +
              " , Build your form in seconds with AI form Builder",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/aiform/${formRecord?.id}`,
            title: jsonForm?.formTitle,
          }}
          onClick={() => console.log("Shared successfully!")}
        >
          <Button
            variant="ghost"
            size="sm"
            className="flex hover:bg-white bg-white items-center gap-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
          >
            <Share className="h-5 w-5" />
            Share
          </Button>
        </RWebShare>

        <Link href={`/edit-form/${formRecord?.id}`}>
          <Button
            size="sm"
            className="flex items-center gap-2 bg-neomorphic-primary text-white hover:bg-neomorphic-primary-light"
          >
            <Edit className="h-5 w-5" />
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FormListItem;
