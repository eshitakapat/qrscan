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
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-2 text-subheading">
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
                  <User className="h-5 w-5 text-foreground" />
                  <CardTitle>Store Information</CardTitle>
                </div>
                <CardDescription>
                  Manage your store's basic information and settings
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { label: 'Store Name', value: 'My Inventory Store', type: 'text' },
                    { label: 'Email Address', value: 'admin@inventorystore.com', type: 'email' },
                    { label: 'Phone Number', value: '+1 (555) 123-4567', type: 'tel' },
                  ].map((field, i) => (
                    <div key={i} className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{field.label}</label>
                      <input
                        type={field.type}
                        defaultValue={field.value}
                        className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Currency</label>
                    <select className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                      <option>CAD - Canadian Dollar</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm  font-medium text-foreground">Address</label>
                  <textarea
                    rows={3}
                    defaultValue={`123 Business Street
Suite 100
New York, NY 10001`}
                    className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Timezone</label>
                  <select className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>EST - Eastern Standard Time</option>
                    <option>CST - Central Standard Time</option>
                    <option>MST - Mountain Standard Time</option>
                    <option>PST - Pacific Standard Time</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button onClick={handleSaveChanges} className='bg-card/50 hover:bg-background' variant="success">
                    <Save className="h-4 w-4 mr-2 " />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coming Soon Tabs */}
          {[
            { value: 'qr-codes', icon: QrCode, label: 'QR Code management features are currently under development and will be available soon.' },
            { value: 'notifications', icon: Bell, label: 'Notification management features are currently under development and will be available soon.' },
            { value: 'appearance', icon: Palette, label: 'Appearance customization features are currently under development and will be available soon.' },
            { value: 'backup', icon: Database, label: 'Data backup and restore features are currently under development and will be available soon.' },
          ].map(({ value, icon: Icon, label }) => (
            <TabsContent key={value} value={value}>
              <Card>
                <CardContent className="space-y-6">
                  <div className="text-center py-16">
                    <Icon className="h-20 w-20 mx-auto text-muted mb-2" />
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Coming Soon</h3>
                    <p className="text-subheading max-w-md mx-auto">{label}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
