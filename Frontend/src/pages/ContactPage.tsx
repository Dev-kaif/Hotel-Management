import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative px-4 py-24"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3)",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-3 text-center">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Phone className="mx-auto mb-4 text-gold" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Mail className="mx-auto mb-4 text-gold" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@luxehaven.com</p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <MapPin className="mx-auto mb-4 text-gold" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Gourmet Avenue, Metropolis</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>5:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center mt-4 text-muted-foreground">
                    <Clock className="mr-2" size={16} />
                    <span>Lunch service available on weekends 12:00 PM - 3:00 PM</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
                <p className="mb-4">
                  For reservations, please call us directly or use our online booking system.
                  For large parties (8 or more), please contact us at least 7 days in advance.
                </p>
                <Button className="bg-gold text-black hover:bg-gold/90 w-full">
                  Book a Table
                </Button>
              </Card>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="mb-6">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="bg-gold text-black hover:bg-gold/90 w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
