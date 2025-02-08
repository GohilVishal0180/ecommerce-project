"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    offers: true,
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">सेटिंग्स</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">प्रोफ़ाइल</TabsTrigger>
            <TabsTrigger value="account">अकाउंट</TabsTrigger>
            <TabsTrigger value="notifications">नोटिफिकेशन</TabsTrigger>
            <TabsTrigger value="security">सुरक्षा</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>प्रोफ़ाइल सेटिंग्स</CardTitle>
                <CardDescription>अपनी प्रोफ़ाइल जानकारी अपडेट करें</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <Button>फोटो बदलें</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">पहला नाम</Label>
                    <Input id="first-name" defaultValue="उपयोगकर्ता" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">आखिरी नाम</Label>
                    <Input id="last-name" defaultValue="नाम" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ईमेल</Label>
                    <Input id="email" type="email" defaultValue="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">फोन नंबर</Label>
                    <Input id="phone" type="tel" defaultValue="+91 1234567890" />
                  </div>
                </div>

                <Button>सेव करें</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>अकाउंट सेटिंग्स</CardTitle>
                <CardDescription>अपने अकाउंट की सेटिंग्स प्रबंधित करें</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>भाषा</Label>
                    <select className="w-full p-2 border rounded">
                      <option value="hi">हिंदी</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>टाइम ज़ोन</Label>
                    <select className="w-full p-2 border rounded">
                      <option>भारतीय मानक समय (IST)</option>
                      <option>पैसिफिक टाइम (PT)</option>
                    </select>
                  </div>
                </div>
                <Button>सेव करें</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>नोटिफिकेशन सेटिंग्स</CardTitle>
                <CardDescription>अपनी नोटिफिकेशन प्राथमिकताएं कस्टमाइज़ करें</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ईमेल नोटिफिकेशन</p>
                      <p className="text-sm text-gray-500">ऑर्डर अपडेट और प्रोमो</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">पुश नोटिफिकेशन</p>
                      <p className="text-sm text-gray-500">रीयल-टाइम अपडेट</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">स्पेशल ऑफर</p>
                      <p className="text-sm text-gray-500">डिस्काउंट और प्रोमो</p>
                    </div>
                    <Switch
                      checked={notifications.offers}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, offers: checked }))}
                    />
                  </div>
                </div>
                <Button>सेव करें</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>सुरक्षा सेटिंग्स</CardTitle>
                <CardDescription>अपने अकाउंट की सुरक्षा प्रबंधित करें</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">वर्तमान पासवर्ड</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">नया पासवर्ड</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">पासवर्ड की पुष्टि करें</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button>पासवर्ड अपडेट करें</Button>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">टू-फैक्टर ऑथेंटिकेशन</h3>
                  <Button variant="outline">2FA सेटअप करें</Button>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-red-600 mb-4">खतरनाक क्षेत्र</h3>
                  <Button variant="destructive">अकाउंट डिलीट करें</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

