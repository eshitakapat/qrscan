"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/dashboard/setting_report_user/card';
import { Button } from '@/components/dashboard/setting_report_user/button';
import { Badge } from '@/components/dashboard/setting_report_user/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dashboard/setting_report_user/dialog';
import { Input } from '@/components/dashboard/setting_report_user/input';
import { Label } from '@/components/dashboard/setting_report_user/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/dashboard/setting_report_user/select';
import { Plus, Download, MoreHorizontal, Clock } from 'lucide-react';
import { useState } from 'react';

// Mock user data
const initialUsers = [
  {
    id: 1,
    initials: 'JD',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2 minutes ago',
  },
  {
    id: 2,
    initials: 'JS',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Employee',
    status: 'Active',
    lastActive: '1 hour ago',
  },
  {
    id: 3,
    initials: 'RJ',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'Employee',
    status: 'Active',
    lastActive: '3 hours ago',
  },
  {
    id: 4,
    initials: 'ED',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Customer',
    status: 'Active',
    lastActive: '1 day ago',
  },
  {
    id: 5,
    initials: 'MW',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    role: 'Customer',
    status: 'Inactive',
    lastActive: '2 weeks ago',
  },
  {
    id: 6,
    initials: 'SB',
    name: 'Sarah Brown',
    email: 'sarah.brown@example.com',
    role: 'Employee',
    status: 'Active',
    lastActive: '5 hours ago',
  },
  {
    id: 7,
    initials: 'DM',
    name: 'David Miller',
    email: 'david.miller@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '30 minutes ago',
  },
  {
    id: 8,
    initials: 'LT',
    name: 'Lisa Taylor',
    email: 'lisa.taylor@example.com',
    role: 'Customer',
    status: 'Pending',
    lastActive: 'Never',
  },
];

const getRoleBadgeVariant = (role: string) => {
  switch (role.toLowerCase()) {
    case 'admin':
      return 'admin' as const;
    case 'employee':
      return 'employee' as const;
    case 'customer':
      return 'customer' as const;
    default:
      return 'default' as const;
  }
};

const getStatusBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'active' as const;
    case 'inactive':
      return 'inactive' as const;
    case 'pending':
      return 'pending' as const;
    default:
      return 'default' as const;
  }
};

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Customer',
    status: 'Active'
  });

  // Filter users
  const filterUsers = (category: string, role: string, status: string, usersList = users) => {
    let filtered = usersList;

    if (category !== 'all') {
      filtered = filtered.filter(user => user.role.toLowerCase() === category);
    }

    if (role !== 'all') {
      filtered = filtered.filter(user => user.role.toLowerCase() === role);
    }

    if (status !== 'all') {
      filtered = filtered.filter(user => user.status.toLowerCase() === status);
    }

    setFilteredUsers(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterUsers(category, selectedRole, selectedStatus);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    filterUsers(selectedCategory, role, selectedStatus);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    filterUsers(selectedCategory, selectedRole, status);
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;

    const nextId = Math.max(...users.map(u => u.id)) + 1;
    const initials = newUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    
    const userToAdd = {
      id: nextId,
      initials,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status,
      lastActive: 'Just now'
    };

    const updatedUsers = [...users, userToAdd];
    setUsers(updatedUsers);
    filterUsers(selectedCategory, selectedRole, selectedStatus, updatedUsers);
    
    setNewUser({ name: '', email: '', role: 'Customer', status: 'Active' });
    setIsAddUserOpen(false);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="mt-2 text-subheading">
              Manage user accounts and permissions
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <Button variant="outline" className='bg-primary hover:bg-secondary hover:text-foreground' size="default">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button variant="success" className='bg-primary hover:bg-secondary' size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                  <DialogDescription className="text-secondary">
                    Enter the basic information for the new user.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newUser.name}
                      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      className="col-span-3 bg-secondary border border-warning text-foreground"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      className="col-span-3 bg-secondary border border-background text-foreground"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right text-foreground">
                      Role
                    </Label>
                    <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                      <SelectTrigger className="col-span-3 bg-secondary border border-background text-subheading">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary border border-secondary text-subheading">
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Employee">Employee</SelectItem>
                        <SelectItem value="Customer">Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right text-foreground">
                      Status
                    </Label>
                    <Select value={newUser.status} onValueChange={(value) => setNewUser({ ...newUser, status: value })}>
                      <SelectTrigger className="col-span-3 bg-secondary border border-background text-subheading">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary border border-secondary text-subheading">
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddUser}>
                    Add User
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-[#2c482e] border border-background text-foreground">
          <CardContent className="py-4">
            <div className="flex flex-wrap gap-4">
              <select 
                className="rounded-lg border-background bg-background px-3 py-2 text-sm text-foreground"
                value={selectedRole}
                onChange={(e) => handleRoleChange(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
              </select>
              <select 
                className="rounded-lg border-background bg-background px-3 py-2 text-sm text-foreground"
                value={selectedStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* User Categories */}
        <div className="flex space-x-1 bg-secondary/90 rounded-lg p-1">
          <button 
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              selectedCategory === 'all' 
                ? 'bg-secondary text-foreground' 
                : 'hover:bg-primary hover:text-[#f2f2f2] text-[#a6a6a6]'
            }`}
            onClick={() => handleCategoryChange('all')}
          >
            All Users
          </button>
          <button 
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              selectedCategory === 'admin' 
                ? 'bg-[#54734e] text-[#ffffff]' 
                : 'hover:bg-[#2c482e] hover:text-[#f2f2f2] text-[#a6a6a6]'
            }`}
            onClick={() => handleCategoryChange('admin')}
          >
            Admins
          </button>
          <button 
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              selectedCategory === 'employee' 
                ? 'bg-[#54734e] text-[#ffffff]' 
                : 'hover:bg-[#2c482e] hover:text-[#f2f2f2] text-[#a6a6a6]'
            }`}
            onClick={() => handleCategoryChange('employee')}
          >
            Employees
          </button>
          <button 
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              selectedCategory === 'customer' 
                ? 'bg-secondary text-foreground' 
                : 'hover:bg-primary hover:text-foreground text-subheading'
            }`}
            onClick={() => handleCategoryChange('customer')}
          >
            Customers
          </button>
        </div>

        {/* Users Table */}
        <Card className="bg-primary border border-background text-foreground">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription className="text-subheading">
              A list of all users in your system including their role and status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-background">
                    <th className="pb-3 text-left text-sm font-medium text-subheading">User</th>
                    <th className="pb-3 text-left text-sm font-medium text-subheading">Email</th>
                    <th className="pb-3 text-left text-sm font-medium text-subheading">Role</th>
                    <th className="pb-3 text-left text-sm font-medium text-subheading">Status</th>
                    <th className="pb-3 text-left text-sm font-medium text-subheading">Last Active</th>
                    <th className="pb-3 text-left text-sm font-medium text-subheading">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-background/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-[#ffffff] text-sm font-medium">
                            {user.initials}
                          </div>
                          <span className="font-medium text-foreground">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-subheading">{user.email}</td>
                      <td className="py-4">
                        <Badge variant={getRoleBadgeVariant(user.role)}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <Badge variant={getStatusBadgeVariant(user.status)}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-4 text-subheading">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span className="text-sm">{user.lastActive}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-subheading">
                Showing 1 to {filteredUsers.length} of {users.length} users
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Users;
