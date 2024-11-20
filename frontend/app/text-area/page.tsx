import type { Metadata } from "next";
import TextArea from "../_components/text-area";

export const metadata: Metadata = {
  title: "Text Area | Abstractly",
};

export default function TextAreaPage() {
  return (
    <div className="h-full flex flex-col gap-y-8 justify-start items-center py-28">
      <TextArea
        name="description"
        label="Description"
        placeholder="Write your message..."
      />
      <TextArea
        name="description"
        label="Description"
        placeholder="Enter a description..."
        error="This field is required"
      />
      <TextArea
        name="description"
        label="Description"
        placeholder="Write your message..."
        isDisabled={true}
      />
    </div>
  );
}
