"use client";

import { Button } from "@/components/ui/button";
import { IconBtn } from "@/components/ui/icon-btn";
import { Color, Size } from "@/type";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilter: React.FC<MobileFilterProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-white"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />

       <div className="fixed inset-0 z-40 flex">
       <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
          <div className="flex items-center justify-end px-4">
            <IconBtn icon={<X size={15} />} onClick={onClose} />
          </div>
          <div className="p-4">
            <Filter valueKey="sizeId" data={sizes} name="Sizes" />
            <Filter valueKey="colorId" data={colors} name="Colors" />
          </div>
        </DialogPanel>
       </div>
      </Dialog>
    </>
  );
};