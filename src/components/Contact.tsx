import { Dialog, DialogHeader, DialogContent, DialogTrigger, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Replace this with your email sending logic (e.g., using EmailJS or a backend API)
        const emailBody = `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Message: ${formData.message}
        `;

        console.log("Sending email to chan.ng.cashin@gmail.com with the following details:");
        console.log(emailBody);

        // Reset the form
        setFormData({ name: "", phone: "", message: "" });
        alert("Your message has been sent!");
    };

    return (
        <Dialog>
          <DialogTrigger>
            <Button 
                variant="outline"
                className="text-yellow-500 text-lg border-0"
            >
                <a
                    href="#contact"
                >
                    Contact
                </a>
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-800 border-zinc-800 text-yellow-500">
            <DialogHeader>
              <DialogTitle className="text-xl">Contact Me</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-yellow-500"
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-yellow-500 text-zinc-800 hover:bg-yellow-600">
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    )
}