'use client';

import { Button } from '@xipkg/button';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  ModalCloseButton,
} from '@xipkg/modal';
import { Input } from '@xipkg/input';
import { Label } from '@xipkg/label';

export default function ModalDemo() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Modal>
        <ModalTrigger asChild>
          <Button size="s">Edit Profile</Button>
        </ModalTrigger>
        <ModalContent className="sm:max-w-[425px]">
          <ModalHeader>
            <ModalTitle>Edit profile</ModalTitle>
            <ModalDescription>
              Make changes to your profile here. Click save when you're done.
            </ModalDescription>
          </ModalHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <ModalFooter>
            <Button type="submit">Save changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal>
        <ModalTrigger asChild>
          <Button>Edit Profile</Button>
        </ModalTrigger>
        <ModalContent variant="full">
          <ModalCloseButton />
          <ModalHeader>
            <ModalTitle>Edit profile</ModalTitle>
            <ModalDescription>
              Make changes to your profile here. Click save when you're done.
            </ModalDescription>
          </ModalHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <ModalFooter>
            <Button type="submit">Save changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
