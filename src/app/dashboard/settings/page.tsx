"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/dashboard/setting_report_user/card';
import { Button } from '@/components/dashboard/setting_report_user/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/dashboard/setting_report_user/tabs';
import { 
  Store, 
  QrCode, 
  Bell, 
  Palette, 
  Database,
  User,
  Save
} from 'lucide-react';

const Settings = () => {
  const handleSaveChanges = () => {
    // Dummy save action - replace with API call later
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#f2f2f2]">Settings</h1>
          <p className="mt-2 text-[#a6a6a6]">
            Manage your account preferences
          </p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="store" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="store" className="flex items-center space-x-2">
              <Store className="h-4 w-4" />
              <span className="hidden sm:inline">Store</span>
            </TabsTrigger>
            <TabsTrigger value="qr-codes" className="flex items-center space-x-2">
              <QrCode className="h-4 w-4" />
              <span className="hidden sm:inline">QR Codes</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Backup</span>
            </TabsTrigger>
          </TabsList>

          {/* Store Tab */}
          <TabsContent value="store">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-accent" />
                  <CardTitle>Store Information</CardTitle>
                </div>
                <CardDescription>
                  Manage your store's basic information and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#f2f2f2]">Store Name</label>
                    <input
                      type="text"
                      defaultValue="My Inventory Store"
                      className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#f2f2f2]">Email Address</label>
                    <input
                      type="email"
                      defaultValue="admin@inventorystore.com"
                      className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#f2f2f2]">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#f2f2f2]">Currency</label>
                    <select className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#f2f2f2]">Address</label>
                  <textarea
                    rows={3}
                    defaultValue={`123 Business Street
Suite 100
New York, NY 10001`}
                    className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#f2f2f2]">Timezone</label>
                  <select className="w-full rounded-lg border border-[#213322] bg-[#091315] px-3 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="EST">EST - Eastern Standard Time</option>
                    <option value="CST">CST - Central Standard Time</option>
                    <option value="MST">MST - Mountain Standard Time</option>
                    <option value="PST">PST - Pacific Standard Time</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button onClick={handleSaveChanges} variant="success" size="default">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* QR Codes Tab */}
          <TabsContent value="qr-codes">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-16">
                  <QrCode className="h-20 w-20 mx-auto text-[#a6a6a6]/50 mb-6" />
                  <h3 className="text-2xl font-semibold text-[#f2f2f2] mb-3">Coming Soon</h3>
                  <p className="text-[#a6a6a6] max-w-md mx-auto">
                    QR Code management features are currently under development and will be available soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-16">
                  <Bell className="h-20 w-20 mx-auto text-[#a6a6a6]/50 mb-6" />
                  <h3 className="text-2xl font-semibold text-[#f2f2f2] mb-3">Coming Soon</h3>
                  <p className="text-[#a6a6a6] max-w-md mx-auto">
                    Notification management features are currently under development and will be available soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-16">
                  <Palette className="h-20 w-20 mx-auto text-[#a6a6a6]/50 mb-6" />
                  <h3 className="text-2xl font-semibold text-[#f2f2f2] mb-3">Coming Soon</h3>
                  <p className="text-[#a6a6a6] max-w-md mx-auto">
                    Appearance customization features are currently under development and will be available soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Backup Tab */}
          <TabsContent value="backup">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-16">
                  <Database className="h-20 w-20 mx-auto text-[#a6a6a6]/50 mb-6" />
                  <h3 className="text-2xl font-semibold text-[#f2f2f2] mb-3">Coming Soon</h3>
                  <p className="text-[#a6a6a6] max-w-md mx-auto">
                    Data backup and restore features are currently under development and will be available soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
