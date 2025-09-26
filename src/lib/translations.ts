export type Language = 'ar' | 'en'

export interface TranslationKeys {
  // Header translations
  company: {
    name: string
    sector: string
    slogan: string
  }
  nav: {
    home: string
    about: string
    projects: string
    services: string
    contact: string
    support247: string
    language: string
    version: string
  }
  // Login Selection translations
  loginSelection: {
    title: string
    subtitle: string
    description: string
    selectAccount: string
    erp: string
    customer: {
      title: string
      description: string
      features: string[]
    }
    employee: {
      title: string
      description: string
      features: string[]
    }
    admin: {
      title: string
      description: string
      features: string[]
    }
  }
  // Login translations
  login: {
    backButton: string
    email: string
    password: string
    rememberMe: string
    forgotPassword: string
    loginButton: string
    loggingIn: string
    needHelp: string
    noAccount: string
    requestAccount: string
    privacyPolicy: string
    termsOfService: string
    accessLevel: string
  }
  // Apps Hub translations
  appsHub: {
    welcome: string
    categories: string[]
    searchPlaceholder: string
    allApps: string
    favoriteApps: string
    systemCore: string
    accounting: string
    crm: string
    hr: string
    projects: string
    communication: string
    support: string
    reports: string
    specialized: string
    appsAvailable: string
    listView: string
    gridView: string
    noResultsFound: string
    tryDifferentSearch: string
    apps: {
      [key: string]: {
        name: string
        description: string
        features: string[]
      }
    }
  }
  // System features
  systemFeatures: {
    title: string
    customerManagement: {
      title: string
      description: string
    }
    employeeManagement: {
      title: string
      description: string
    }
    security: {
      title: string
      description: string
    }
    integration: {
      title: string
      description: string
    }
  }
  // Footer
  footer: {
    company: {
      name: string
      phone: string
      address: string
      email: string
      bookNow: string
    }
    pageLinks: {
      title: string
      home: string
      about: string
      certificates: string
      projects: string
      services: string
      clients: string
      blog: string
      contact: string
    }
    moreInfo: {
      title: string
      businessAssets: string
      whatsappApp: string
      downloads: string
      customerSupport: string
      requestQuote: string
    }
    interactiveServices: {
      title: string
      chatHub: string
      newMaintenance: string
      trackOrders: string
    }
    copyright: string
    designedBy: string
  }
}

export const translations: Record<Language, TranslationKeys> = {
  ar: {
    company: {
      name: 'شركة العزب للخدمات المعمارية',
      sector: 'الإنشاءات',
      slogan: 'نظام تخطيط موارد المؤسسة المتكامل'
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      projects: 'مشاريعنا',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      support247: 'الدعم على مدار الساعة',
      language: 'العربية',
      version: 'الإصدار'
    },
    loginSelection: {
      title: 'نظام العزب المتكامل',
      subtitle: 'نظام تخطيط موارد المؤسسة',
      description: 'نظام تخطيط موارد المؤسسة المتكامل',
      selectAccount: 'اختيار نوع الحساب للدخول',
      erp: 'نظام تخطيط الموارد',
      customer: {
        title: 'العملاء',
        description: 'للعملاء الذين يرغبون في الوصول إلى خدماتنا وطلباتهم وإدارة حساباتهم',
        features: [
          'عرض الطلبات والفواتير',
          'تتبع حالة الطلبات',
          'إدارة الملف الشخصي'
        ]
      },
      employee: {
        title: 'الموظفين',
        description: 'للموظفين للوصول إلى أدوات العمل اليومية وإدارة المهام والعمليات',
        features: [
          'إدارة العملاء والمبيعات',
          'تتبع المهام اليومية',
          'التقارير والإحصائيات'
        ]
      },
      admin: {
        title: 'الإدارة',
        description: 'للمدراء للوصول إلى لوحة التحكم الكاملة وإدارة النظام والمستخدمين',
        features: [
          'إدارة المستخدمين والصلاحيات',
          'الإعدادات العامة للنظام',
          'التحليلات والتقارير المتقدمة'
        ]
      }
    },
    login: {
      backButton: 'العودة لاختيار نوع الحساب',
      email: 'البريد الإلكتروني أو اسم المستخدم',
      password: 'كلمة المرور',
      rememberMe: 'تذكرني',
      forgotPassword: 'نسيت كلمة المرور؟',
      loginButton: 'تسجيل الدخول',
      loggingIn: 'جاري تسجيل الدخول...',
      needHelp: 'تحتاج مساعدة؟',
      noAccount: 'ليس لديك حساب؟',
      requestAccount: 'طلب حساب جديد',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الاستخدام',
      accessLevel: 'اختر مستوى الوصول الخاص بك'
    },
    appsHub: {
        welcome: 'مرحباً بك في بوابة تطبيقات العزب',
        categories: [
          'التطبيقات المفضلة: وصول سريع لما تستخدمه يومياً',
          'المشاريع والصيانة: أدوات لتتبع عملك وخدماتك',
          'لوحات المعلومات: تقارير في الوقت الفعلي وتحليلات',
          'البريد والتواصل: اتصال آمن وفعال مع فريقك وعملائك'
        ],
        searchPlaceholder: 'البحث في التطبيقات...',
        allApps: 'الكل',
        favoriteApps: 'المفضلة',
        systemCore: 'النظام الأساسي',
        accounting: 'المحاسبة والمالية',
        crm: 'إدارة العملاء',
        hr: 'الموارد البشرية',
        projects: 'إدارة المشاريع',
        communication: 'التواصل والتفاعل',
        support: 'المساعدة والدعم',
        reports: 'التقارير والتحليلات',
        specialized: 'الخدمات المتخصصة',
      appsAvailable: 'تطبيق متاح',
      listView: 'قائمة',
      gridView: 'شبكة',
      noResultsFound: 'لم يتم العثور على تطبيقات',
      tryDifferentSearch: 'جرب البحث بكلمات أخرى أو اختر فئة مختلفة',
        apps: {
        frappe: {
          name: 'إطار العمل الأساسي',
          description: 'منصة التطوير الأساسية',
          features: ['الإطار الأساسي', 'قاعدة البيانات', 'واجهة المطور']
        },
        erpnext: {
          name: 'نظام تخطيط الموارد',
          description: 'نظام ERP المؤسسي الشامل',
          features: ['إدارة مؤسسية', 'تكامل شامل', 'تقارير متقدمة']
        },
        payments: {
          name: 'المدفوعات',
          description: 'إدارة المدفوعات الإلكترونية',
          features: ['بوابات الدفع', 'تتبع المدفوعات', 'الفواتير']
        },
        webshop: {
          name: 'المتجر الإلكتروني',
          description: 'منصة التجارة الإلكترونية',
          features: ['متجر متكامل', 'إدارة المنتجات', 'معالجة الطلبات']
        },
        waba_integration: {
          name: 'واتساب للأعمال',
          description: 'تكامل واتساب للأعمال',
          features: ['رسائل تلقائية', 'دعم العملاء', 'إشعارات']
        },
        lending: {
          name: 'نظام الإقراض',
          description: 'إدارة القروض والتمويل',
          features: ['طلبات القروض', 'جدولة السداد', 'إدارة المخاطر']
        },
        changemakers: {
          name: 'صناع التغيير',
          description: 'منصة إدارة المبادرات',
          features: ['إدارة المبادرات', 'تتبع التأثير', 'التعاون']
        },
        exotel_integration: {
          name: 'تكامل الاتصالات',
          description: 'تكامل خدمات الاتصال',
          features: ['مكالمات صوتية', 'تسجيل المكالمات', 'تقارير الاتصال']
        },
        design: {
          name: 'التصميم',
          description: 'أدوات التصميم والإبداع',
          features: ['تصميم جرافيكي', 'قوالب', 'أدوات إبداعية']
        },
        customer_statements: {
          name: 'كشوف العملاء',
          description: 'كشوف حسابات العملاء',
          features: ['كشوف تفصيلية', 'تتبع المستحقات', 'التقارير']
        },
        charts: {
          name: 'الرسوم البيانية',
          description: 'مكتبة الرسوم البيانية',
          features: ['رسوم تفاعلية', 'تحليل البيانات', 'لوحات معلومات']
        },
        books: {
          name: 'الكتب المحاسبية',
          description: 'النظام المحاسبي المتكامل',
          features: ['القيود المحاسبية', 'الميزانية العامة', 'التقارير المالية']
        },
        email_delivery_service: {
          name: 'خدمة توصيل البريد',
          description: 'خدمة توصيل البريد الإلكتروني',
          features: ['توصيل موثوق', 'تتبع الرسائل', 'تقارير التسليم']
        },
        openai_integration: {
          name: 'الذكاء الاصطناعي',
          description: 'تكامل الذكاء الاصطناعي',
          features: ['مساعد ذكي', 'تحليل النصوص', 'أتمتة المهام']
        },
        visa_management: {
          name: 'إدارة التأشيرات',
          description: 'نظام إدارة التأشيرات',
          features: ['طلبات التأشيرة', 'تتبع الحالة', 'المستندات']
        },
        egypt_compliance: {
          name: 'الامتثال المصري',
          description: 'نظام الامتثال للقوانين المصرية',
          features: ['ضريبة القيمة المضافة', 'التقارير الحكومية', 'الامتثال القانوني']
        },
        rfq: {
          name: 'عملية فتح العروض',
          description: 'إدارة عملية طلبات العروض',
          features: ['إدارة المناقصات', 'تقييم العروض', 'الترسية']
        },
        crm: {
          name: 'إدارة علاقات العملاء',
          description: 'نظام CRM المتطور',
          features: ['قاعدة العملاء', 'تتبع التفاعلات', 'إدارة الفرص']
        },
        telegram_integration: {
          name: 'تليجرام',
          description: 'تكامل تليجرام',
          features: ['رسائل تليجرام', 'بوت تلقائي', 'إشعارات']
        },
        helpdesk: {
          name: 'مكتب المساعدة',
          description: 'نظام دعم العملاء',
          features: ['تذاكر الدعم', 'قاعدة المعرفة', 'دردشة مباشرة']
        },
        contract_payment: {
          name: 'مدفوعات العقود',
          description: 'إدارة مدفوعات العقود',
          features: ['جدولة المدفوعات', 'متابعة العقود', 'التنبيهات']
        },
        mail: {
          name: 'البريد الإلكتروني',
          description: 'نظام البريد الإلكتروني',
          features: ['إرسال واستقبال', 'تنظيم الرسائل', 'المرفقات']
        },
        project_payroll: {
          name: 'كشف رواتب المشاريع',
          description: 'إدارة رواتب فرق المشاريع',
          features: ['رواتب المشاريع', 'توزيع التكاليف', 'تقارير الأجور']
        },
        propms: {
          name: 'إدارة العقارات',
          description: 'نظام إدارة العقارات',
          features: ['سجل العقارات', 'عقود الإيجار', 'الصيانة']
        },
        trello: {
          name: 'تريلو',
          description: 'تكامل مع تريلو',
          features: ['لوحات المشاريع', 'بطاقات المهام', 'تتبع التقدم']
        },
        raven: {
          name: 'رافين',
          description: 'منصة التواصل الداخلي',
          features: ['محادثات الفريق', 'قنوات', 'مشاركة الملفات']
        },
        mail_reminder: {
          name: 'تذكير البريد',
          description: 'نظام تذكير البريد',
          features: ['تذكيرات تلقائية', 'جدولة الرسائل', 'متابعة الردود']
        },
        utility_billing: {
          name: 'فواتير المرافق',
          description: 'إدارة فواتير المرافق',
          features: ['فواتير المياه والكهرباء', 'قراءة العدادات', 'التحصيل']
        },
        wiki: {
          name: 'الويكي',
          description: 'قاعدة المعرفة والوثائق',
          features: ['مقالات تفاعلية', 'بحث متقدم', 'تنظيم المحتوى']
        },
        todo: {
          name: 'قوائم المهام',
          description: 'إدارة المهام والأنشطة',
          features: ['قوائم مهام', 'تذكيرات', 'تتبع الإنجاز']
        },
        hrms: {
          name: 'نظام الموارد البشرية',
          description: 'إدارة شاملة للموارد البشرية',
          features: ['ملفات الموظفين', 'الحضور والانصراف', 'إدارة الإجازات']
        },
        whatsapp: {
          name: 'واتساب العادي',
          description: 'تكامل واتساب العادي',
          features: ['رسائل مباشرة', 'إشعارات', 'تتبع المحادثات']
        },
        price_estimation: {
          name: 'تقدير الأسعار',
          description: 'نظام تقدير الأسعار الذكي',
          features: ['حساب التكاليف', 'عروض الأسعار', 'مقارنة الأسعار']
        },
        banking: {
          name: 'الخدمات المصرفية',
          description: 'التكامل مع البنوك',
          features: ['ربط البنوك', 'تسوية الحسابات', 'التحويلات']
        },
        print_designer: {
          name: 'مصمم الطباعة',
          description: 'تصميم وتخصيص التقارير',
          features: ['قوالب مخصصة', 'تنسيق متقدم', 'طباعة احترافية']
        },
        gantt: {
          name: 'مخطط جانت',
          description: 'مخططات جانت للمشاريع',
          features: ['التخطيط الزمني', 'تتبع التقدم', 'إدارة المهام']
        },
        digital_signer: {
          name: 'التوقيع الرقمي',
          description: 'نظام التوقيع الإلكتروني',
          features: ['توقيع آمن', 'تشفير', 'مصادقة رقمية']
        },
        meeting: {
          name: 'الاجتماعات',
          description: 'نظام إدارة الاجتماعات',
          features: ['جدولة الاجتماعات', 'محاضر', 'متابعة القرارات']
        },
        studio: {
          name: 'استوديو التطبيقات',
          description: 'استوديو تطوير التطبيقات',
          features: ['تطوير التطبيقات', 'تخصيص النظام', 'إدارة الكود']
        },
        lms: {
          name: 'نظام إدارة التعلم',
          description: 'منصة التعليم الإلكتروني',
          features: ['دورات تدريبية', 'اختبارات', 'شهادات']
        },
        zakat: {
          name: 'حساب الزكاة',
          description: 'حساب وإدارة الزكاة',
          features: ['حساب تلقائي للزكاة', 'تقارير الزكاة', 'التوزيع']
        },
        builder: {
          name: 'منشئ المواقع',
          description: 'منشئ المواقع الإلكترونية',
          features: ['بناء المواقع', 'تصميم متجاوب', 'تحسين محركات البحث']
        },
        gameplan: {
          name: 'خطة اللعبة',
          description: 'تخطيط وإدارة المشاريع',
          features: ['تخطيط استراتيجي', 'تتبع الأهداف', 'إدارة الفريق']
        },
        drive: {
          name: 'القرص السحابي',
          description: 'تخزين ومشاركة الملفات',
          features: ['تخزين آمن', 'مشاركة الملفات', 'نسخ احتياطية']
        },
        insights: {
          name: 'الرؤى والتحليلات',
          description: 'تحليلات ذكية متقدمة',
          features: ['ذكاء اصطناعي', 'تنبؤات', 'تحليل الاتجاهات']
        }
      }
    },
    systemFeatures: {
      title: 'ميزات النظام',
      customerManagement: {
        title: 'إدارة العملاء',
        description: 'نظام شامل لإدارة العملاء والعلاقات'
      },
      employeeManagement: {
        title: 'إدارة الموظفين',
        description: 'أدوات متقدمة لإدارة الموارد البشرية'
      },
      security: {
        title: 'الأمان والحماية',
        description: 'حماية متقدمة لبيانات المؤسسة'
      },
      integration: {
        title: 'التكامل الكامل',
        description: 'ربط جميع أقسام المؤسسة في منصة واحدة'
      }
    },
    footer: {
      company: {
        name: 'شركة العزب للإنشاءات',
        phone: '(+20) 1000000000',
        address: 'القاهرة الجديدة، مصر',
        email: 'البريد الإلكتروني',
        bookNow: 'احجز الآن'
      },
      pageLinks: {
        title: 'روابط الصفحات',
        home: 'الرئيسية',
        about: 'من نحن',
        certificates: 'الشهادات',
        projects: 'المشاريع',
        services: 'الخدمات',
        clients: 'العملاء',
        blog: 'المدونة',
        contact: 'اتصل بنا'
      },
      moreInfo: {
        title: 'معلومات أكثر',
        businessAssets: 'الأصول التجارية',
        whatsappApp: 'تطبيق الواتساب',
        downloads: 'التحميلات',
        customerSupport: 'دعم العملاء',
        requestQuote: 'طلب عرض سعر'
      },
      interactiveServices: {
        title: 'الخدمات التفاعلية',
        chatHub: 'مركز المحادثة',
        newMaintenance: 'طلب صيانة جديد',
        trackOrders: 'تتبع الطلبات'
      },
      copyright: '© حقوق الطبع والنشر شركة العزب للإنشاءات جميع الحقوق محفوظة',
      designedBy: 'مصمم بواسطة Alazab.dev'
    }
  },
  en: {
    company: {
      name: 'Al-Azab Architectural Services Company',
      sector: 'Construction',
      slogan: 'Integrated Enterprise Resource Planning System'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Our Projects',
      services: 'Our Services',
      contact: 'Contact Us',
      support247: '24/7 Support',
      language: 'English',
      version: 'Version'
    },
    loginSelection: {
      title: 'Al-Azab Integrated System',
      subtitle: 'Enterprise Resource Planning System',
      description: 'Integrated Enterprise Resource Planning System',
      selectAccount: 'Select Account Type to Login',
      erp: 'ERP System',
      customer: {
        title: 'Customers',
        description: 'For customers who want to access our services, orders and manage their accounts',
        features: [
          'View orders and invoices',
          'Track order status',
          'Manage personal profile'
        ]
      },
      employee: {
        title: 'Employees',
        description: 'For employees to access daily work tools and manage tasks and operations',
        features: [
          'Customer and sales management',
          'Track daily tasks',
          'Reports and statistics'
        ]
      },
      admin: {
        title: 'Administration',
        description: 'For managers to access full control panel and manage system and users',
        features: [
          'User and permission management',
          'General system settings',
          'Advanced analytics and reports'
        ]
      }
    },
    login: {
      backButton: 'Back to Account Type Selection',
      email: 'Email or Username',
      password: 'Password',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      loginButton: 'Login',
      loggingIn: 'Logging in...',
      needHelp: 'Need Help?',
      noAccount: "Don't have an account?",
      requestAccount: 'Request New Account',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      accessLevel: 'Choose your access level'
    },
    appsHub: {
      welcome: 'Welcome to Al-Azab Apps Hub',
      categories: [
        'Favorite Apps: Quick access to what you use daily',
        'Projects & Maintenance: Tools to track your work and services',
        'Dashboards: Real-time reports and analytics',
        'Email & Communication: Secure and efficient connection with your team and customers'
      ],
      searchPlaceholder: 'Search apps...',
      allApps: 'All',
      favoriteApps: 'Favorites',
      systemCore: 'System Core',
      accounting: 'Accounting & Finance',
      crm: 'Customer Management',
      hr: 'Human Resources',
      projects: 'Project Management',
      communication: 'Communication & Interaction',
      support: 'Help & Support',
      reports: 'Reports & Analytics',
      specialized: 'Specialized Services',
      appsAvailable: 'apps available',
      listView: 'List',
      gridView: 'Grid',
      noResultsFound: 'No applications found',
      tryDifferentSearch: 'Try searching with different keywords or select a different category',
      apps: {
        frappe: {
          name: 'Frappe Framework',
          description: 'Core development platform',
          features: ['Basic framework', 'Database', 'Developer interface']
        },
        erpnext: {
          name: 'ERPNext',
          description: 'Comprehensive enterprise ERP system',
          features: ['Corporate management', 'Comprehensive integration', 'Advanced reports']
        },
        payments: {
          name: 'Payments',
          description: 'Electronic payment management',
          features: ['Payment gateways', 'Payment tracking', 'Invoices']
        },
        webshop: {
          name: 'Webshop',
          description: 'E-commerce platform',
          features: ['Integrated store', 'Product management', 'Order processing']
        },
        waba_integration: {
          name: 'WhatsApp Business',
          description: 'WhatsApp Business integration',
          features: ['Automated messages', 'Customer support', 'Notifications']
        },
        lending: {
          name: 'Lending System',
          description: 'Loan and financing management',
          features: ['Loan applications', 'Payment scheduling', 'Risk management']
        },
        changemakers: {
          name: 'Changemakers',
          description: 'Initiative management platform',
          features: ['Initiative management', 'Impact tracking', 'Collaboration']
        },
        exotel_integration: {
          name: 'Communications Integration',
          description: 'Communication services integration',
          features: ['Voice calls', 'Call recording', 'Call reports']
        },
        design: {
          name: 'Design',
          description: 'Design and creativity tools',
          features: ['Graphic design', 'Templates', 'Creative tools']
        },
        customer_statements: {
          name: 'Customer Statements',
          description: 'Customer account statements',
          features: ['Detailed statements', 'Receivables tracking', 'Reports']
        },
        charts: {
          name: 'Charts',
          description: 'Chart library',
          features: ['Interactive charts', 'Data analysis', 'Dashboards']
        },
        books: {
          name: 'Accounting Books',
          description: 'Integrated accounting system',
          features: ['Journal entries', 'General ledger', 'Financial reports']
        },
        email_delivery_service: {
          name: 'Email Delivery Service',
          description: 'Email delivery service',
          features: ['Reliable delivery', 'Message tracking', 'Delivery reports']
        },
        openai_integration: {
          name: 'AI Integration',
          description: 'Artificial intelligence integration',
          features: ['Smart assistant', 'Text analysis', 'Task automation']
        },
        visa_management: {
          name: 'Visa Management',
          description: 'Visa management system',
          features: ['Visa applications', 'Status tracking', 'Documents']
        },
        egypt_compliance: {
          name: 'Egypt Compliance',
          description: 'Egyptian law compliance system',
          features: ['VAT', 'Government reports', 'Legal compliance']
        },
        rfq: {
          name: 'RFQ Opening Process',
          description: 'Request for quotation process management',
          features: ['Tender management', 'Proposal evaluation', 'Award']
        },
        crm: {
          name: 'Customer Relationship Management',
          description: 'Advanced CRM system',
          features: ['Customer database', 'Interaction tracking', 'Opportunity management']
        },
        telegram_integration: {
          name: 'Telegram',
          description: 'Telegram integration',
          features: ['Telegram messages', 'Automated bot', 'Notifications']
        },
        helpdesk: {
          name: 'Help Desk',
          description: 'Customer support system',
          features: ['Support tickets', 'Knowledge base', 'Live chat']
        },
        contract_payment: {
          name: 'Contract Payments',
          description: 'Contract payment management',
          features: ['Payment scheduling', 'Contract tracking', 'Alerts']
        },
        mail: {
          name: 'Email',
          description: 'Email system',
          features: ['Send and receive', 'Message organization', 'Attachments']
        },
        project_payroll: {
          name: 'Project Payroll',
          description: 'Project team payroll management',
          features: ['Project payroll', 'Cost distribution', 'Wage reports']
        },
        propms: {
          name: 'Property Management',
          description: 'Property management system',
          features: ['Property registry', 'Lease contracts', 'Maintenance']
        },
        trello: {
          name: 'Trello',
          description: 'Trello integration',
          features: ['Project boards', 'Task cards', 'Progress tracking']
        },
        raven: {
          name: 'Raven',
          description: 'Internal communication platform',
          features: ['Team chats', 'Channels', 'File sharing']
        },
        mail_reminder: {
          name: 'Mail Reminder',
          description: 'Email reminder system',
          features: ['Automatic reminders', 'Message scheduling', 'Response tracking']
        },
        utility_billing: {
          name: 'Utility Billing',
          description: 'Utility bill management',
          features: ['Water and electricity bills', 'Meter readings', 'Collection']
        },
        wiki: {
          name: 'Wiki',
          description: 'Knowledge base and documentation',
          features: ['Interactive articles', 'Advanced search', 'Content organization']
        },
        todo: {
          name: 'Todo Lists',
          description: 'Task and activity management',
          features: ['Task lists', 'Reminders', 'Progress tracking']
        },
        hrms: {
          name: 'Human Resource Management System',
          description: 'Comprehensive human resource management',
          features: ['Employee files', 'Attendance', 'Leave management']
        },
        whatsapp: {
          name: 'WhatsApp',
          description: 'Regular WhatsApp integration',
          features: ['Direct messages', 'Notifications', 'Conversation tracking']
        },
        price_estimation: {
          name: 'Price Estimation',
          description: 'Smart price estimation system',
          features: ['Cost calculation', 'Price quotes', 'Price comparison']
        },
        banking: {
          name: 'Banking Services',
          description: 'Bank integration',
          features: ['Bank linking', 'Account reconciliation', 'Transfers']
        },
        print_designer: {
          name: 'Print Designer',
          description: 'Report design and customization',
          features: ['Custom templates', 'Advanced formatting', 'Professional printing']
        },
        gantt: {
          name: 'Gantt Chart',
          description: 'Project Gantt charts',
          features: ['Timeline planning', 'Progress tracking', 'Task management']
        },
        digital_signer: {
          name: 'Digital Signer',
          description: 'Electronic signature system',
          features: ['Secure signing', 'Encryption', 'Digital authentication']
        },
        meeting: {
          name: 'Meetings',
          description: 'Meeting management system',
          features: ['Meeting scheduling', 'Minutes', 'Decision tracking']
        },
        studio: {
          name: 'App Studio',
          description: 'Application development studio',
          features: ['App development', 'System customization', 'Code management']
        },
        lms: {
          name: 'Learning Management System',
          description: 'E-learning platform',
          features: ['Training courses', 'Tests', 'Certificates']
        },
        zakat: {
          name: 'Zakat Calculation',
          description: 'Zakat calculation and management',
          features: ['Automatic zakat calculation', 'Zakat reports', 'Distribution']
        },
        builder: {
          name: 'Website Builder',
          description: 'Website builder',
          features: ['Website building', 'Responsive design', 'SEO optimization']
        },
        gameplan: {
          name: 'Gameplan',
          description: 'Project planning and management',
          features: ['Strategic planning', 'Goal tracking', 'Team management']
        },
        drive: {
          name: 'Cloud Drive',
          description: 'File storage and sharing',
          features: ['Secure storage', 'File sharing', 'Backups']
        },
        insights: {
          name: 'Insights & Analytics',
          description: 'Advanced smart analytics',
          features: ['Artificial intelligence', 'Predictions', 'Trend analysis']
        }
      }
    },
    systemFeatures: {
      title: 'System Features',
      customerManagement: {
        title: 'Customer Management',
        description: 'Comprehensive system for customer and relationship management'
      },
      employeeManagement: {
        title: 'Employee Management',
        description: 'Advanced tools for human resource management'
      },
      security: {
        title: 'Security & Protection',
        description: 'Advanced protection for enterprise data'
      },
      integration: {
        title: 'Complete Integration',
        description: 'Connect all enterprise departments in one platform'
      }
    },
    footer: {
      company: {
        name: 'Al-Azab Construction Company',
        phone: '(+20) 1000000000',
        address: 'New Cairo, Egypt',
        email: 'Email',
        bookNow: 'Book Now'
      },
      pageLinks: {
        title: 'Page Links',
        home: 'Home',
        about: 'About Us',
        certificates: 'Certificates',
        projects: 'Projects',
        services: 'Services',
        clients: 'Clients',
        blog: 'Blog',
        contact: 'Contact Us'
      },
      moreInfo: {
        title: 'More Information',
        businessAssets: 'Business Assets',
        whatsappApp: 'WhatsApp App',
        downloads: 'Downloads',
        customerSupport: 'Customer Support',
        requestQuote: 'Request Quote'
      },
      interactiveServices: {
        title: 'Interactive Services',
        chatHub: 'ChatHub',
        newMaintenance: 'New Maintenance Request',
        trackOrders: 'Track Orders'
      },
      copyright: '© Copyright Al-Azab Construction Company All Rights Reserved',
      designedBy: 'Designed by Alazab.dev'
    }
  }
}

export const getTranslation = (language: Language): TranslationKeys => {
  return translations[language] || translations.ar
}