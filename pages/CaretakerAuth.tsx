
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const CaretakerAuth = () => {
  const navigate = useNavigate();
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerAge, setRegisterAge] = useState('');
  const [registerCity, setRegisterCity] = useState('');
  const [registerPrice, setRegisterPrice] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a toast and redirect
    // In a real app, we'd validate and send to backend
    toast.success("Login successful!", {
      description: "Welcome back to MemHeav!"
    });
    
    // Navigate to caretaker dashboard
    navigate('/caretaker/dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password match validation
    if (registerPassword !== registerConfirmPassword) {
      toast.error("Passwords don't match!", {
        description: "Please make sure your passwords match."
      });
      return;
    }
    
    // For now, just show a toast and redirect
    // In a real app, we'd validate and send to backend
    toast.success("Registration successful!", {
      description: "Welcome to MemHeav! You can now log in."
    });
    
    // Navigate to caretaker dashboard
    navigate('/caretaker/dashboard');
  };

  return (
    <Layout>
      <div className="memheav-container py-16">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-memheav-teal mb-8 text-center">
            Caretaker Portal
          </h1>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-lg py-3">Login</TabsTrigger>
              <TabsTrigger value="register" className="text-lg py-3">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Welcome Back</CardTitle>
                  <CardDescription className="text-lg">
                    Log in to access your caretaker dashboard
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-lg">Email</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="text-lg p-6"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="login-password" className="text-lg">Password</Label>
                        <a href="#" className="text-memheav-teal hover:text-memheav-darkTeal text-lg">
                          Forgot password?
                        </a>
                      </div>
                      <Input 
                        id="login-password" 
                        type="password" 
                        className="text-lg p-6"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full text-xl bg-memheav-coral hover:bg-memheav-lightCoral text-memheav-darkTeal font-medium py-6"
                    >
                      Log In
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Create Account</CardTitle>
                  <CardDescription className="text-lg">
                    Register as a caretaker to offer your services to patients
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegister}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-lg">Full Name</Label>
                      <Input 
                        id="register-name" 
                        placeholder="John Doe" 
                        className="text-lg p-6"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-age" className="text-lg">Age</Label>
                        <Input 
                          id="register-age" 
                          type="number" 
                          placeholder="35" 
                          className="text-lg p-6"
                          value={registerAge}
                          onChange={(e) => setRegisterAge(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-city" className="text-lg">City</Label>
                        <Input 
                          id="register-city" 
                          placeholder="Mumbai" 
                          className="text-lg p-6"
                          value={registerCity}
                          onChange={(e) => setRegisterCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-price" className="text-lg">Monthly Price (₹)</Label>
                      <Input 
                        id="register-price" 
                        type="number" 
                        placeholder="10000" 
                        className="text-lg p-6"
                        value={registerPrice}
                        onChange={(e) => setRegisterPrice(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-lg">Email</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="text-lg p-6"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-lg">Password</Label>
                      <Input 
                        id="register-password" 
                        type="password" 
                        className="text-lg p-6"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm-password" className="text-lg">Confirm Password</Label>
                      <Input 
                        id="register-confirm-password" 
                        type="password" 
                        className="text-lg p-6"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full text-xl bg-memheav-coral hover:bg-memheav-lightCoral text-memheav-darkTeal font-medium py-6"
                    >
                      Register
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default CaretakerAuth;
