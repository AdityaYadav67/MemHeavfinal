
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <Layout>
      <div className="memheav-container py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-memheav-teal mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-memheav-teal">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-lg">Full Name</Label>
                        <Input id="name" placeholder="Your name" className="text-lg p-6" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-lg">Email Address</Label>
                        <Input id="email" type="email" placeholder="Your email" className="text-lg p-6" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-lg">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" className="text-lg p-6" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-lg">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        className="text-lg p-6 min-h-[150px] resize-none" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-memheav-teal hover:bg-memheav-darkTeal text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-memheav-teal">Get in Touch</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Have questions about our services, need support, or interested in joining our team?
                  We'd love to hear from you. Here's how you can reach us:
                </p>
              </div>
              
              <Card className="border-memheav-lightTeal">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-memheav-lightTeal p-3 rounded-full">
                      <Mail className="h-6 w-6 text-memheav-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Email</h3>
                      <a href="mailto:support@memheav.com" className="text-lg text-memheav-teal hover:underline">
                        support@memheav.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-memheav-lightTeal">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-memheav-lightTeal p-3 rounded-full">
                      <Phone className="h-6 w-6 text-memheav-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Phone</h3>
                      <a href="tel:+911234567890" className="text-lg text-memheav-teal hover:underline">
                        +91 12345 67890
                      </a>
                      <p className="text-gray-600 mt-1">Monday to Friday, 9am - 6pm IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-memheav-lightTeal">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-memheav-lightTeal p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-memheav-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Office Address</h3>
                      <p className="text-lg">
                        123 Memory Lane,<br />
                        Bangalore, Karnataka,<br />
                        India - 560001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
