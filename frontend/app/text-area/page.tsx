import type { Metadata } from "next";
import TextArea from "../_components/text-area";

export const metadata: Metadata = {
  title: "Text Area | UI Component Library | Jason Long",
};

export default function TextAreaPage() {
  return (
    <div className="h-full flex flex-col gap-y-8 justify-start items-center py-28">
      <TextArea
        name="message1"
        label="Description"
        placeholder="Write your message..."
      />
      <TextArea
        name="message2"
        label="Description"
        placeholder="Enter a description..."
        error="This field is required"
      />
      <TextArea
        name="message3"
        label="Description"
        placeholder="Write your message..."
        isDisabled={true}
      />
    </div>
  );
}
