
import React from 'react';
import Layout from '../../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Users, Bell, Clock, CheckCircle, AlertCircle, User, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const CaretakerDashboard = () => {
  // Mock data for patients
  const assignedPatients = [
    { 
      id: 1, 
      name: 'Rajesh Kumar', 
      age: 68, 
      city: 'Delhi', 
      avatar: '', 
      tasksDone: 5, 
      totalTasks: 7,
      nextReminder: 'Take Medicine at 2:00 PM'
    },
    { 
      id: 2, 
      name: 'Anita Sharma', 
      age: 72, 
      city: 'Mumbai', 
      avatar: '',
      tasksDone: 3, 
      totalTasks: 3,
      nextReminder: 'Doctor\'s Appointment at 11:00 AM tomorrow'
    },
  ];
  
  // Mock data for upcoming reminders
  const upcomingReminders = [
    { id: 1, patientName: 'Rajesh Kumar', type: 'Medicine', title: 'Blood Pressure Medicine', time: '2:00 PM', date: 'Today' },
    { id: 2, patientName: 'Anita Sharma', type: 'Appointment', title: 'Doctor\'s Appointment', time: '11:00 AM', date: 'Tomorrow' },
    { id: 3, patientName: 'Rajesh Kumar', type: 'Task', title: 'Evening Walk', time: '6:00 PM', date: 'Today' },
  ];

  return (
    <Layout>
      <div className="memheav-container py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-memheav-teal mb-8">
          Caretaker Dashboard
        </h1>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/caretaker/patients">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-12 w-12 text-memheav-coral mb-4" />
                <h3 className="font-bold text-xl text-center">View Patients</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/caretaker/upcoming-tasks">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Bell className="h-12 w-12 text-memheav-coral mb-4" />
                <h3 className="font-bold text-xl text-center">Upcoming Tasks</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/caretaker/calendar">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Calendar className="h-12 w-12 text-memheav-coral mb-4" />
                <h3 className="font-bold text-xl text-center">Calendar View</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/caretaker/profile">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <User className="h-12 w-12 text-memheav-coral mb-4" />
                <h3 className="font-bold text-xl text-center">My Profile</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        {/* Assigned Patients */}
        <div className="mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-memheav-teal">Assigned Patients</CardTitle>
                <CardDescription className="text-lg">Your current patients and their status</CardDescription>
              </div>
              <Link to="/caretaker/patients">
                <Button variant="outline">View All</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {assignedPatients.map(patient => (
                  <Card key={patient.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback className="bg-memheav-lightTeal text-memheav-teal text-lg">
                            {patient.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold">{patient.name}</h3>
                          <p className="text-gray-600">{patient.age} years, {patient.city}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Task Completion</span>
                          <span className="font-medium">{patient.tasksDone}/{patient.totalTasks}</span>
                        </div>
                        <Progress value={(patient.tasksDone / patient.totalTasks) * 100} className="h-2" />
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-600 text-sm">Next Reminder:</p>
                        <p className="font-medium">{patient.nextReminder}</p>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        <Link to={`/caretaker/patients/${patient.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Upcoming Reminders */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-memheav-teal">Upcoming Patient Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingReminders.map(reminder => (
                <div key={reminder.id} className="mb-4 p-4 bg-memheav-lightCoral rounded-xl flex items-start">
                  <div className="mr-4 mt-1">
                    {reminder.type === 'Medicine' && <Bell className="h-8 w-8 text-memheav-coral" />}
                    {reminder.type === 'Appointment' && <Calendar className="h-8 w-8 text-memheav-coral" />}
                    {reminder.type === 'Task' && <Clock className="h-8 w-8 text-memheav-coral" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-lg">For {reminder.patientName}</p>
                    <h3 className="font-semibold text-xl">{reminder.title}</h3>
                    <p className="text-lg text-gray-600">
                      {reminder.time}, {reminder.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Snooze</Button>
                    <Button size="sm">Complete</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CaretakerDashboard;
