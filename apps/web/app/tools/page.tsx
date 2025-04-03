import ColorConverter from "@/components/widgets/color-convertor";
import { LoremIpsumGenerator } from "@/components/widgets/lorem-generator";

export default function ToolsPage() {
  return (
    <div className="mb-56">
      <ColorConverter />
      <LoremIpsumGenerator />
    </div>
  );
}
