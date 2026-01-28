import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import {
  LayoutDashboard,
  Bot,
  ShoppingCart,
  User,
  CheckSquare,
  FileText,
  Table,
  Files,
  MessageCircle,
  Headphones,
  Mail,
  PieChart,
  Box,
  ShieldCheck,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

const sidebarItems = [
  {
    title: 'Menu',
    children: [
      {
        title: 'Dashboard',
        icon: LayoutDashboard,
        children: [
          { title: 'eCommerce', url: '#' },
          { title: 'Analytics', url: '#' },
          { title: 'Marketing', url: '#' },
          { title: 'CRM', url: '#' },
          { title: 'Stocks', url: '#' },
          { title: 'Saas', url: '#' },
          { title: 'Logistics', url: '#' },
        ],
      },
      {
        title: 'AI Assistant',
        icon: Bot,
        children: [
          { title: 'Text Generator', url: '#' },
          { title: 'Image Generator', url: '#' },
          { title: 'Code Generator', url: '#' },
          { title: 'Video Generator', url: '#' },
        ],
      },
      {
        title: 'E-commerce',
        icon: ShoppingCart,
        children: [
          { title: 'Products', url: '#' },
          { title: 'Add Products', url: '#' },
          { title: 'Billing', url: '#' },
          { title: 'Invoices', url: '#' },
          { title: 'Single Invoice', url: '#' },
          { title: 'Create Invoice', url: '#' },
          { title: 'Transactions', url: '#' },
          { title: 'Single Transaction', url: '#' },
        ],
      },
      {
        title: 'Calendar',
        url: '#',
        icon: Calendar,
      },
      {
        title: 'User Profile',
        url: '#',
        icon: User,
      },
      {
        title: 'Task',
        icon: CheckSquare,
        children: [
          { title: 'List', url: '#' },
          { title: 'Kanban', url: '#' },
        ],
      },
      {
        title: 'Forms',
        icon: FileText,
        children: [
          { title: 'Form Elements', url: '#' },
          { title: 'Form Layout', url: '#' },
        ],
      },
      {
        title: 'Tables',
        icon: Table,
        children: [
          { title: 'Basic Tables', url: '#' },
          { title: 'Data Tables', url: '#' },
        ],
      },
      {
        title: 'Pages',
        icon: Files,
        children: [
          { title: 'File Manager', url: '#' },
          { title: 'Pricing Tables', url: '#' },
          { title: 'FAQ', url: '#' },
          { title: 'API keys', url: '#' },
          { title: 'Integrations', url: '#' },
          { title: 'Blank Page', url: '#' },
          { title: '404 Error', url: '#' },
          { title: '500 Error', url: '#' },
          { title: '503 Error', url: '#' },
          { title: 'Coming Soon', url: '#' },
          { title: 'Maintenance', url: '#' },
          { title: 'Success', url: '#' },
        ],
      },
    ],
  },

  {
    title: 'Support',
    children: [
      {
        title: 'Chat',
        url: '#',
        icon: MessageCircle,
      },
      {
        title: 'Support Ticket',
        icon: Headphones,
        children: [
          { title: 'Ticket List', url: '#' },
          { title: 'Ticket Reply', url: '#' },
        ],
      },
      {
        title: 'Email',
        icon: Mail,
        children: [
          { title: 'Inbox', url: '#' },
          { title: 'Details', url: '#' },
        ],
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {sidebarItems.map((item) => (
          <Collapsible defaultOpen>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>{item.title}</CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.children.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
