
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import Section from '@/components/Section';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import axios from '@/api/axios';

const BookingPage = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const token = localStorage.getItem('token');

  
  const availableTimes = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
  ];
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!date || !time || !name || !email || !phone) {
      toast({
        variant: "destructive",
        description: "Please fill in all required fields"
      });
      return;
    }
  
    setLoading(true);
  
    try {
      const formattedDate = format(date, 'yyyy-MM-dd'); // <-- FIX HERE
      
      const res = await axios.post("/booking", {
        date: formattedDate,
        time,
        guests,
        name,
        email,
        phone,
        specialRequests,
      });
  
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Table booked successfully!",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        description: err?.response?.data?.message || err.message || "Failed to book table",
      });
    } finally {
      setLoading(false);
    }
  };
  
  
  
  const handleNewBooking = () => {
    setSubmitted(false);
    setDate(null);
    setTime('');
    setGuests(2);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };
  
  return (
    <div className="pt-20">
      <div 
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)`,
          backgroundPosition: 'center 70%'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Book a Table</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Reserve your perfect dining experience at Luxe Haven. We look forward to serving you.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-muted shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Reservation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                          Date *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="date"
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Select a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date || undefined}
                              onSelect={(date) => setDate(date)}
                              initialFocus
                              disabled={(date) => date < new Date()}
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-gold" />
                          Time *
                        </Label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-muted border border-input rounded-md px-3 py-2 h-10"
                          required
                        >
                          <option value="">Select a time</option>
                          {availableTimes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-gold" />
                          Number of Guests *
                        </Label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full bg-muted border border-input rounded-md px-3 py-2 h-10"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                          <option value="9">9+ (Large Party)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t border-muted pt-6">
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Full Name *</Label>
                          <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Email Address *</Label>
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Phone Number *</Label>
                          <Input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your phone number"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2 space-y-2">
                          <Label>Special Requests</Label>
                          <textarea
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            className="w-full bg-muted border border-input rounded-md px-3 py-2"
                            placeholder="Any special requests, dietary restrictions, or occasion?"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center pt-4">
                      <Button
                        type="submit"
                        className="bg-gold hover:bg-gold-dark text-black text-lg px-8 py-6"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                            Processing...
                          </div>
                        ) : (
                          'Confirm Reservation'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-muted shadow-lg text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="text-gold h-16 w-16" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Reservation Confirmed!</CardTitle>
                  <CardDescription className="mb-6">
                    Thank you for choosing Luxe Haven. We've sent a confirmation to your email.
                  </CardDescription>
                  
                  <div className="bg-muted rounded-lg p-6 mb-8 max-w-md mx-auto">
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-semibold">{date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Party Size</p>
                        <p className="font-semibold">{guests} {guests === 1 ? 'Person' : 'People'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Confirmation #</p>
                        <p className="font-semibold">{Math.floor(100000 + Math.random() * 900000)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleNewBooking}
                    className="bg-gold hover:bg-gold-dark text-black"
                  >
                    Make Another Reservation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default BookingPage;
