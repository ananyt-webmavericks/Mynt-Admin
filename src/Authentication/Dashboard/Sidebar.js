import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import BusinessIcon from '@mui/icons-material/Business';
import DraftsIcon from '@mui/icons-material/Drafts';
import QuizIcon from '@mui/icons-material/Quiz';
import HighlightIcon from '@mui/icons-material/Highlight';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import StarRateIcon from '@mui/icons-material/StarRate';
import PaymentsIcon from '@mui/icons-material/Payments';

export const SidebarData = [
  {
    title: 'Dahboard',
    path: '/home',
    icon: <DashboardIcon />,
    cName: 'nav-text',  
  },
  {
    title: 'Campaign',
    path: '/home/campaign',
    icon: <CampaignIcon />,
    cName: 'nav-text',
    path1 : '/home/campaign/insert',

    
  },
  {
    title: 'Company',
    path: '/home/company',
    icon: <BusinessIcon />,
    cName: 'nav-text', 
    path1 : '/home/company/insert',
  },
  {
    title: 'Deal Terms',
    path: '/home/deal_term',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    path1 : '/home/deal_term/insert', 
    
  },
  {
    title: 'Deal Type',
    path: '/home/deal_type',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text', 
    path1 : '/home/deal_type/insert',

      },
  {
    title: 'Documents',
    path: '/home/documents',
    icon: <DraftsIcon />,
    cName: 'nav-text', 
    path1 : '/home/documents/insert',
    
  },
  {
    title: 'FAQs',
    path: '/home/faqs',
    icon: <QuizIcon />,
    cName: 'nav-text', 
    path1 : '/home/faqs/insert',
    
  },
  {
    title: 'Highlights',
    path: '/home/highlights',
    icon: <HighlightIcon />,
    cName: 'nav-text', 
    path1 : '/home/highlights/insert',
    
  },
  {
    title: 'Investor KYC',
    path: '/home/investor_kyc',
    icon: <AiIcons.AiFillMoneyCollect/>,
    cName: 'nav-text', 
    path1 : '/home/investor_kyc/insert',
    
  },
  {
    title: 'Investor Consents',
    path: '/home/investor_consents',
    icon: <FcIcons.FcMoneyTransfer />,
    cName: 'nav-text', 
    path1 : '/home/investor_consents/insert',
    
  },
  {
    title: 'Users',
    path: '/home/user',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text', 
    path1 : '/home/user/insert',
    
  },
  {
    title: 'People',
    path: '/home/people',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text', 
    path1 : '/home/people/insert',
    
  },
  {
    title: 'Press',
    path: '/home/press',
    icon: <InterpreterModeIcon />,
    cName: 'nav-text',
    path1 : '/home/press/insert', 
    
  },
  {
    title: 'Rewards',
    path: '/home/rewards',
    icon: <StarRateIcon/>,
    cName: 'nav-text', 
    path1 : '/home/rewards/insert',
    
  },
  {
    title: 'Payments',
    path: '/home/payments',
    icon: <PaymentsIcon/>,
    cName: 'nav-text', 
    path1 : '/home/payments/insert',
    
  },
  {
    title: 'Users',
    path: '/home/user-invest',
    icon: <FiIcons.FiUsers/>,
    cName: 'nav-text', 
    path1 : '/home/user-invest/insert',
    
  },
  {
    title: 'Campaign Under Review',
    path: '/home/under-review',
    icon: <CampaignIcon/>,
    cName: 'nav-text', 
    // path1 : '/home/payments/insert',
    
  },
];