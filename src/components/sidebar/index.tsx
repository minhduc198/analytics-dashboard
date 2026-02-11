import {
  Bot,
  Calendar,
  CheckSquare,
  Files,
  FileText,
  Headphones,
  LayoutDashboard,
  Mail,
  MessageCircle,
  ShoppingCart,
  Table,
  User,
} from 'lucide-react'

import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { path } from '@/routers/path'
import SideBarSection from './sidebar-section'
import { useSidebarControl } from '@/hooks/use-sidebar-control'

const sidebarItems = [
  {
    title: 'Menu',
    children: [
      {
        id: 1,
        title: 'Dashboard',
        icon: LayoutDashboard,
        children: [
          { id: 1.1, title: 'eCommerce', url: path.eCommerce },
          { id: 1.2, title: 'Analytics', url: path.analytics },
          { id: 1.3, title: 'Marketing', url: path.marketing },
          { id: 1.4, title: 'CRM', url: path.crm },
          { id: 1.5, title: 'Stocks', url: path.stocks },
          { id: 1.6, title: 'Saas', url: path.saas },
          { id: 1.7, title: 'Logistics', url: path.logistics },
        ],
      },
      {
        id: 2,
        title: 'AI Assistant',
        icon: Bot,
        children: [
          { id: 2.1, title: 'Text Generator', url: path.textGenerator },
          { id: 2.2, title: 'Image Generator', url: path.imageGenerator },
          { id: 2.3, title: 'Code Generator', url: path.codeGenerator },
          { id: 2.4, title: 'Video Generator', url: path.videoGenerator },
        ],
      },
      {
        id: 3,
        title: 'E-commerce',
        icon: ShoppingCart,
        children: [
          { id: 3.1, title: 'Products', url: path.products },
          { id: 3.2, title: 'Add Products', url: path.addProduct },
          { id: 3.3, title: 'Billing', url: path.billing },
          { id: 3.4, title: 'Invoices', url: path.invoices },
          { id: 3.5, title: 'Single Invoice', url: path.singleInvoice },
          { id: 3.6, title: 'Create Invoice', url: path.createInvoice },
          { id: 3.7, title: 'Transactions', url: path.transactions },
          { id: 3.8, title: 'Single Transaction', url: path.singleTransaction },
        ],
      },
      {
        id: 4,
        title: 'Calendar',
        url: path.calendar,
        icon: Calendar,
      },
      {
        id: 5,
        title: 'User Profile',
        url: path.userProfile,
        icon: User,
      },
      {
        id: 6,
        title: 'Task',
        icon: CheckSquare,
        children: [
          { id: 6.1, title: 'List', url: path.list },
          { id: 6.2, title: 'Kanban', url: path.kanban },
        ],
      },
      {
        id: 7,
        title: 'Forms',
        icon: FileText,
        children: [
          { id: 7.1, title: 'Form Elements', url: path.formElements },
          { id: 7.2, title: 'Form Layout', url: path.formLayout },
        ],
      },
      {
        id: 8,
        title: 'Tables',
        icon: Table,
        children: [
          { id: 8.1, title: 'Basic Tables', url: path.basicTables },
          { id: 8.2, title: 'Data Tables', url: path.dataTables },
        ],
      },
      {
        id: 9,
        title: 'Pages',
        icon: Files,
        children: [
          { id: 9.1, title: 'File Manager', url: path.fileManager },
          { id: 9.2, title: 'Pricing Tables', url: path.pricingTables },
          { id: 9.3, title: 'FAQ', url: path.faq },
          { id: 9.4, title: 'API keys', url: path.apiKeys },
          { id: 9.5, title: 'Integrations', url: path.integrations },
          { id: 9.6, title: 'Blank Page', url: path.blankPage },
          { id: 9.7, title: '404 Error', url: path.error404 },
          { id: 9.8, title: '500 Error', url: path.error500 },
          { id: 9.9, title: '503 Error', url: path.error503 },
          { id: 9.1, title: 'Coming Soon', url: path.comingSoon },
          { id: 9.11, title: 'Maintenance', url: path.maintenance },
          { id: 9.12, title: 'Success', url: path.success },
        ],
      },
    ],
  },

  {
    title: 'Support',
    children: [
      {
        title: 'Chat',
        id: 10,
        url: path.chat,
        icon: MessageCircle,
      },
      {
        id: 11,
        title: 'Support Ticket',
        icon: Headphones,
        children: [
          { id: 11.1, title: 'Ticket List', url: path.ticketList },
          { id: 11.2, title: 'Ticket Reply', url: path.ticketReply },
        ],
      },
      {
        id: 12,
        title: 'Email',
        icon: Mail,
        children: [
          { id: 12.1, title: 'Inbox', url: path.inbox },
          { id: 12.2, title: 'Details', url: path.details },
        ],
      },
    ],
  },
]

export function AppSidebar() {
  const { isPinned, isHovering, setIsHovering } = useSidebarControl()
  const isExpanded = isPinned || isHovering

  return (
    <Sidebar
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <SidebarHeader className="pt-8! pb-7! px-5! bg-background ">
        {isExpanded ? (
          <div>
            <img
              className="dark:hidden"
              src="/src/assets/icons/logo-light.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="/src/assets/icons/logo-dark.svg"
              alt="Logo"
            />
          </div>
        ) : (
          <img
            src="/src/assets/icons/logo-icon.svg"
            className="w-8 h-8 ml-1"
            alt="Logo"
          />
        )}
      </SidebarHeader>
      <SidebarContent className="bg-background">
        {sidebarItems.map((parent) => (
          <SideBarSection key={parent.title} parent={parent} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
