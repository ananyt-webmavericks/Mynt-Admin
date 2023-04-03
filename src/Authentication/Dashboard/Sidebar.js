import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Campaign',
    path: '/home/campaign',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Company',
    path: '/home/company',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text', 
  },
  {
    title: 'Deal Terms',
    path: '/home/deal_term',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Deal Type',
    path: '/home/deal_type',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text', 
    
  },
  {
    title: 'FAQs',
    path: '/home/faqs',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Highlights',
    path: '/home/highlights',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Investor KYC',
    path: '/home/investor_kyc',
    icon: <AiIcons.AiFillMoneyCollect/>,
    cName: 'nav-text', 
    
  },
  {
    title: 'Investor Consents',
    path: '/home/investor_consents',
    icon: <FcIcons.FcMoneyTransfer />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Users',
    path: '/home/user',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text', 
    
  },
  {
    title: 'People',
    path: '/home/people',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Press',
    path: '/home/press',
    icon: <FaIcons.FaWpressr />,
    cName: 'nav-text', 
    
  },
  {
    title: 'Rewards',
    path: '/home/rewards',
    icon: <GiIcons.GiWantedReward/>,
    cName: 'nav-text', 
    
  }
];