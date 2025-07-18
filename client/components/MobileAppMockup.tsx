import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Home,
  Heart,
  MessageCircle,
  Play,
  Settings,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Star,
  Send,
  Users,
  DollarSign,
  Activity,
  Package,
} from "lucide-react";
import { theme } from "@/lib/theme";

interface MobileAppMockupProps {
  show: boolean;
}

// TaskFlow App Component - Enhanced for Enterprise
const TaskFlowApp = () => {
  const profiles = [
    {
      name: "Ana Silva",
      role: "Tech Lead",
      avatar: "👩‍💼",
      status: "online",
      progress: 95,
    },
    {
      name: "João Costa",
      role: "DevOps Engineer",
      avatar: "👨‍💻",
      status: "busy",
      progress: 88,
    },
    {
      name: "Maria Santos",
      role: "Product Manager",
      avatar: "👩‍💼",
      status: "online",
      progress: 92,
    },
  ];

  return (
    <>
      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center p-1.5 bg-gray-100 rounded-lg mb-1"
      >
        <Search size={8} className="text-gray-400" />
        <span className="text-[0.5rem] text-gray-500 ml-1">
          Search projects...
        </span>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-1 mb-1"
      >
        {[
          { label: "Active", value: "24", color: "bg-blue-500" },
          { label: "Deployed", value: "156", color: "bg-green-500" },
          { label: "Pending", value: "8", color: "bg-yellow-500" },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-50 p-1 rounded text-center">
            <div
              className={`text-[0.5rem] font-bold text-white ${stat.color} rounded px-1`}
            >
              {stat.value}
            </div>
            <div className="text-[0.4rem] text-gray-600">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Team Profiles - Reduced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-1 flex-1"
      >
        <div className="text-[0.5rem] font-medium text-gray-700 mb-1">
          Development Team
        </div>
        {profiles.slice(0, 2).map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center space-x-1.5 p-1 bg-gray-50 rounded-lg"
          >
            <div className="relative">
              <div className="text-sm">{profile.avatar}</div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white ${
                  profile.status === "online"
                    ? "bg-green-500"
                    : profile.status === "busy"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }`}
              ></div>
            </div>
            <div className="flex-1">
              <div className="text-[0.5rem] font-medium">{profile.name}</div>
              <div className="text-[0.4rem] text-gray-500">{profile.role}</div>
              <div className="w-full bg-gray-200 rounded-full h-0.5 mt-0.5">
                <div
                  className="bg-blue-500 h-0.5 rounded-full"
                  style={{ width: `${profile.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="text-[0.4rem] text-blue-600 font-medium">
              {profile.progress}%
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex space-x-1"
      >
        <button className="flex-1 py-1.5 bg-blue-500 text-white rounded-lg text-[0.5rem] font-medium flex items-center justify-center space-x-1">
          <Play size={6} />
          <span>Deploy</span>
        </button>
        <button className="p-1.5 bg-gray-200 rounded-lg">
          <Settings size={8} className="text-gray-600" />
        </button>
      </motion.div>
    </>
  );
};

// E-commerce App Component - Enhanced for B2B
const EcommerceApp = () => {
  const products = [
    {
      name: "Enterprise License",
      price: "R$ 29.999",
      image: "🏢",
      rating: 5,
      discount: "20%",
    },
    {
      name: "Cloud Infrastructure",
      price: "R$ 45.999",
      image: "☁���",
      rating: 5,
      discount: null,
    },
    {
      name: "Security Suite",
      price: "R$ 15.999",
      image: "🛡️",
      rating: 4,
      discount: "15%",
    },
  ];

  return (
    <>
      {/* Search & Cart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center p-1.5 bg-gray-100 rounded-lg mb-1"
      >
        <Search size={8} className="text-blue-600" />
        <span className="text-[0.5rem] text-gray-500 ml-1 flex-1">
          Search solutions...
        </span>
        <div className="relative">
          <ShoppingCart size={8} className="text-blue-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-[0.3rem] text-white font-bold">3</span>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex space-x-1 mb-1"
      >
        {["🏢 Enterprise", "☁️ Cloud", "🛡️ Security"].map((category, index) => (
          <div
            key={index}
            className={`px-2 py-0.5 rounded text-[0.4rem] ${
              index === 0
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {category}
          </div>
        ))}
      </motion.div>

      {/* Products - Reduced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-1 flex-1"
      >
        {products.slice(0, 2).map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center space-x-1.5 p-1 bg-gray-50 rounded-lg relative"
          >
            {product.discount && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[0.3rem] px-1 rounded-bl rounded-tr-lg">
                -{product.discount}
              </div>
            )}
            <div className="text-sm">{product.image}</div>
            <div className="flex-1">
              <div className="text-[0.5rem] font-medium">{product.name}</div>
              <div className="flex items-center space-x-1">
                <span className="text-[0.5rem] font-bold text-blue-600">
                  {product.price}
                </span>
                <div className="flex">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={4}
                      fill="#F59E0B"
                      color="#F59E0B"
                      className="text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="p-0.5 bg-blue-600 rounded">
              <ShoppingCart size={6} color="white" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Checkout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-blue-50 p-1 rounded-lg"
      >
        <div className="flex justify-between items-center mb-1">
          <span className="text-[0.5rem] text-gray-600">Total:</span>
          <span className="text-[0.5rem] font-bold text-blue-600">
            R$ 91.997
          </span>
        </div>
        <button className="w-full py-1 bg-blue-600 text-white rounded text-[0.5rem] font-medium flex items-center justify-center space-x-1">
          <Package size={6} />
          <span>Purchase License</span>
        </button>
      </motion.div>
    </>
  );
};

// Analytics App Component - Enhanced for Enterprise
const AnalyticsApp = () => {
  const metrics = [
    { label: "Revenue", value: "R$ 2.4M", growth: "+12%", color: "#10B981" },
    { label: "Users", value: "125K", growth: "+8%", color: "#3B82F6" },
    { label: "Uptime", value: "99.9%", growth: "+0.1%", color: "#F59E0B" },
    { label: "Performance", value: "98%", growth: "+2%", color: "#EF4444" },
  ];

  return (
    <>
      {/* Period Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex space-x-1 mb-1"
      >
        {["Today", "Week", "Quarter"].map((period, index) => (
          <button
            key={period}
            className={`flex-1 py-0.5 px-1 rounded text-[0.4rem] font-medium ${
              index === 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {period}
          </button>
        ))}
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-1 mb-1"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="p-1 bg-gray-50 rounded text-center"
          >
            <div className="flex items-center justify-between mb-0.5">
              <TrendingUp size={6} style={{ color: metric.color }} />
              <div
                className="text-[0.5rem] font-bold"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>
            </div>
            <div className="text-[0.4rem] text-gray-500">{metric.label}</div>
            <div className="text-[0.3rem] text-green-600 font-medium">
              {metric.growth}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-1 bg-gray-50 rounded mb-1"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-[0.5rem] font-medium">Weekly Performance</span>
          <BarChart3 size={8} className="text-green-500" />
        </div>
        <div className="flex items-end space-x-0.5 h-8">
          {[85, 92, 78, 95, 88, 98, 94].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 1 + index * 0.05 }}
              className="flex-1 bg-green-500 rounded-t"
            />
          ))}
        </div>
        <div className="flex justify-between mt-0.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <span key={index} className="text-[0.3rem] text-gray-500">
              {day}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="grid grid-cols-2 gap-1"
      >
        <button className="py-1 bg-green-500 text-white rounded text-[0.4rem] font-medium">
          📊 Dashboard
        </button>
        <button className="py-1 bg-blue-500 text-white rounded text-[0.4rem] font-medium">
          📈 Reports
        </button>
      </motion.div>
    </>
  );
};

// Chat App Component - Enhanced for Teams
const ChatApp = () => {
  const messages = [
    {
      user: "Alice",
      msg: "Production deploy complete ✅",
      time: "14:30",
      avatar: "👩‍💼",
      unread: false,
    },
    {
      user: "Bob",
      msg: "Security audit passed",
      time: "14:32",
      avatar: "👨‍💻",
      unread: true,
    },
    {
      user: "Carol",
      msg: "Client demo at 3 PM",
      time: "14:35",
      avatar: "👩‍💼",
      unread: true,
    },
  ];

  return (
    <>
      {/* Status & Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between p-1 bg-gray-100 rounded mb-1"
      >
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span className="text-[0.5rem] text-gray-600">Team Online</span>
        </div>
        <div className="flex items-center space-x-0.5">
          <span className="text-[0.5rem] font-bold text-orange-600">2</span>
          <Bell size={6} className="text-orange-600" />
        </div>
      </motion.div>

      {/* Messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-1 flex-1"
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-start space-x-1 p-1 bg-gray-50 rounded relative"
          >
            {message.unread && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></div>
            )}
            <div className="text-[0.5rem]">{message.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                <span className="text-[0.5rem] font-medium">
                  {message.user}
                </span>
                <span className="text-[0.4rem] text-gray-500">
                  {message.time}
                </span>
              </div>
              <div className="text-[0.5rem] text-gray-700">{message.msg}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex space-x-1"
      >
        <div className="flex-1 py-1 px-1.5 bg-gray-100 rounded text-[0.5rem] text-gray-500 flex items-center">
          Message team...
        </div>
        <button className="p-1 bg-orange-500 rounded">
          <Send size={6} color="white" />
        </button>
      </motion.div>
    </>
  );
};

// New Enterprise CRM App Component
const CRMApp = () => {
  const leads = [
    { name: "Enterprise Corp", value: "R$ 2.5M", stage: "Closing", icon: "🏢" },
    { name: "TechStart Inc", value: "R$ 890K", stage: "Proposal", icon: "🚀" },
    { name: "Global Ltd", value: "R$ 1.2M", stage: "Discovery", icon: "🌍" },
  ];

  return (
    <>
      {/* Pipeline Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-50 p-1.5 rounded-lg mb-1"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-[0.5rem] font-medium">Sales Pipeline</span>
          <span className="text-[0.4rem] text-blue-600">Q4 2024</span>
        </div>
        <div className="text-[0.6rem] font-bold text-blue-600">R$ 4.59M</div>
        <div className="text-[0.4rem] text-gray-600">Total pipeline value</div>
      </motion.div>

      {/* Leads */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-1 flex-1"
      >
        <div className="text-[0.5rem] font-medium text-gray-700 mb-1">
          Active Opportunities
        </div>
        {leads.slice(0, 2).map((lead, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center space-x-1.5 p-1 bg-gray-50 rounded"
          >
            <div className="text-sm">{lead.icon}</div>
            <div className="flex-1">
              <div className="text-[0.5rem] font-medium">{lead.name}</div>
              <div className="text-[0.4rem] text-gray-500">
                {lead.value} • {lead.stage}
              </div>
            </div>
            <div
              className={`w-8 h-4 rounded text-[0.3rem] text-white flex items-center justify-center font-bold ${
                lead.stage === "Closing"
                  ? "bg-green-500"
                  : lead.stage === "Proposal"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
              }`}
            >
              {lead.stage === "Closing"
                ? "90%"
                : lead.stage === "Proposal"
                  ? "60%"
                  : "30%"}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-1"
      >
        <button className="w-full py-1.5 bg-blue-500 text-white rounded-lg text-[0.5rem] font-medium flex items-center justify-center space-x-1">
          <span>💼</span>
          <span>New Opportunity</span>
        </button>
      </motion.div>
    </>
  );
};

// App configurations with realistic data - NOW DEFINED AFTER COMPONENTS
const apps = [
  {
    id: "taskflow",
    name: "DevOps Platform",
    color: "#3B82F6",
    category: "Development",
    content: <TaskFlowApp />,
  },
  {
    id: "enterprise",
    name: "Enterprise Store",
    color: "#3178C6",
    category: "Commerce",
    content: <EcommerceApp />,
  },
  {
    id: "analytics",
    name: "Business Intelligence",
    color: "#10B981",
    category: "Analytics",
    content: <AnalyticsApp />,
  },
  {
    id: "teams",
    name: "Team Collaboration",
    color: "#F59E0B",
    category: "Communication",
    content: <ChatApp />,
  },
  {
    id: "crm",
    name: "Enterprise CRM",
    color: "#8B5CF6",
    category: "Sales",
    content: <CRMApp />,
  },
];

export const MobileAppMockup = ({ show }: MobileAppMockupProps) => {
  const [currentApp, setCurrentApp] = useState(0);
  const [elements, setElements] = useState<string[]>([]);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setElements(["screen"]), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    if (show && elements.includes("screen")) {
      const interval = setInterval(() => {
        setCurrentApp((prev) => (prev + 1) % apps.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [show, elements]);

  if (!show) return null;

  const currentAppData = apps[currentApp];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-40 h-72 bg-black rounded-3xl p-1 shadow-2xl relative"
    >
      {/* Phone Frame */}
      <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full"></div>

        {/* Status Bar */}
        <div className="absolute top-1 left-2 right-2 flex justify-between items-center">
          <div className="text-[0.4rem] text-black font-medium">9:41</div>
          <div className="flex items-center space-x-0.5">
            <div className="w-3 h-1.5 border border-black rounded-sm">
              <div className="w-2 h-1 bg-black rounded-sm"></div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {elements.includes("screen") && (
            <motion.div
              key={currentApp}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="pt-7 px-2 pb-3 h-full flex flex-col"
            >
              {/* App Header - Smaller */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between p-1 rounded mb-1"
                style={{ backgroundColor: `${currentAppData.color}15` }}
              >
                <div className="flex items-center space-x-1">
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center"
                    style={{ backgroundColor: currentAppData.color }}
                  >
                    <div className="text-white text-[0.4rem] font-bold">
                      {currentAppData.name.charAt(0)}
                    </div>
                  </div>
                  <div
                    className="text-[0.5rem] font-bold"
                    style={{ color: currentAppData.color }}
                  >
                    {currentAppData.name}
                  </div>
                </div>
                <Bell size={8} style={{ color: currentAppData.color }} />
              </motion.div>

              {/* App Content */}
              <div className="flex-1 overflow-hidden">
                {currentAppData.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
