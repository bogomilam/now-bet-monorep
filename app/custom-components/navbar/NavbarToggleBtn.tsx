import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function NavbarToggle() {
  const [open, setOpen] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      className="md:hidden"
      onClick={() => setOpen(!open)}
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="bg-gray-100 h-5 w-5" />}
    </Button>
  );
}
