export const projects = [
  // Previous projects (1-6)...
  // // 
  {

    // card details
    id: 25,
    title: "Recommendation System",
    description: "Personalized content suggestions for media platform",
    status: "Completed",
    color: "accent-purple",
    priority: "low",
    category: "Machine Learning",
    progress: 100,
    deadline: "2023-06-15",
    tasksCompleted: 45,
    totalTasks: 45,
    completedMilestones: 5,
    totalMilestones: 5,
    bookmarked: true,
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    team: ["Sam Wilson", "Bucky Barnes"],

    // detail report of the project
    overview: `This project focuses on developing a recommendation system using machine learning algorithms
        to deliver tailored content to users based on their preferences, interactions, and behavior on the platform.
        Techniques like collaborative filtering and content-based filtering were used to enhance user engagement and retention.`,
    features : [
          {
            icon: '⚡',
            title: 'Real-time Processing',
            description: 'Process data in milliseconds with our optimized algorithms'
          },
          {
            icon: '🧠',
            title: 'Advanced ML Models',
            description: 'State-of-the-art models trained on diverse datasets'
          },
          {
            icon: '🔍',
            title: 'Precision Analytics',
            description: 'Get actionable insights with 95%+ accuracy'
          }
        ],

    steps :[
          {
            title: "Data Input",
            description: "The system accepts various input formats including images, text, or structured data.",
            icon: "fas fa-upload"
          },
          {
            title: "Preprocessing",
            description: "Input data is cleaned and transformed into a format suitable for the AI model.",
            icon: "fas fa-cogs"
          },
          {
            title: "Model Processing",
            description: "Our trained neural network analyzes the data and extracts meaningful patterns.",
            icon: "fas fa-brain"
          },
          {
            title: "Result Generation",
            description: "The system outputs predictions, classifications, or insights based on the analysis.",
            icon: "fas fa-chart-bar"
          },
          {
            System_architecture: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            
          },
        ],
      techStack : [
          { name: 'Python', purpose: 'Backend & ML' },
          { name: 'TensorFlow', purpose: 'Model training' },
          { name: 'React', purpose: 'Frontend' },
          { name: 'PyTorch', purpose: 'Model development' },
          { name: 'Docker', purpose: 'Deployment' },
          { name: 'OpenCV', purpose: 'Image processing' }
        ],
      datasets : [
          { name: 'COCO', description: 'Object detection' },
          { name: 'IMDB', description: 'Sentiment analysis' }
        ],
        useCases : [
          {
            icon: 'fas fa-medkit',
            title: 'Healthcare',
            description: 'Medical image analysis for faster and more accurate diagnoses',
            examples: [
              'Tumor detection in MRI scans',
              'X-ray abnormality classification',
              'Patient health risk prediction'
            ],
            accentColor: '#4F8AFF'
          },
          {
            icon: 'fas fa-chart-line',
            title: 'Finance',
            description: 'Real-time fraud detection and financial forecasting',
            examples: [
              'Credit risk assessment',
              'Algorithmic trading signals',
              'Anomaly detection in transactions'
            ],
            accentColor: '#FF7043'
          },
          {
            icon: 'fas fa-robot',
            title: 'Manufacturing',
            description: 'Predictive maintenance and quality control automation',
            examples: [
              'Defect detection in production lines',
              'Equipment failure prediction',
              'Supply chain optimization'
            ],
            accentColor: '#26A69A'
          },
          {
            icon: 'fas fa-shopping-cart',
            title: 'Retail',
            description: 'Personalized recommendations and inventory management',
            examples: [
              'Customer behavior analysis',
              'Demand forecasting',
              'Visual product search'
            ],
            accentColor: '#AB47BC'
          }
        ],

        performanceMetrics : [
          { metric: 'Accuracy', value: '95%', comparison: '+10% vs baseline' },
          { metric: 'Inference Time', value: '50ms', comparison: '2x faster than v1' },
          { metric: 'Precision', value: '93%', comparison: 'Industry average: 85%' }
        ],

        teamMembers : [
          {
            name: "John Doe",
            role: "AI Researcher",
            bio: "PhD in Computer Science with 10+ years of experience in machine learning.",
            photo: "team1.jpg",
            social: {
              linkedin: "#",
              github: "#",
              twitter: "#"
            }
          },
          {
            name: "Jane Smith",
            role: "Software Engineer",
            bio: "Full-stack developer specializing in AI deployment and scalable systems.",
            photo: "team2.jpg",
            social: {
              linkedin: "#",
              github: "#"
            }
          },
          {
            name: "Alex Johnson",
            role: "Data Scientist",
            bio: "Expert in data preprocessing and model optimization.",
            photo: "team3.jpg",
            social: {
              linkedin: "#",
              twitter: "#"
            }
          }
        ],

        milestones :[
          {
            quarter: "Q3 2023",
            title: "Initial Release",
            completed: true,
            features: ["Core functionality", "Basic API"]
          },
          {
            quarter: "Q4 2023",
            title: "Performance Improvements",
            completed: true,
            features: ["Optimized inference", "Reduced memory usage"]
          },
          {
            quarter: "Q1 2024",
            title: "New Features",
            completed: false,
            features: ["Multi-modal support", "Enhanced UI"]
          },
          {
            quarter: "Q2 2024",
            title: "Enterprise Ready",
            completed: false,
            features: ["Scalability improvements", "Admin dashboard"]
          }
        ],
      faqs : [
          {
            question: "Is this project open-source?",
            answer: "Yes, our project is completely open-source and available on GitHub under the MIT license."
          },
          {
            question: "How can I contribute to the project?",
            answer: "You can contribute by submitting pull requests, reporting issues, or improving documentation. Check our GitHub for more details."
          },
          {
            question: "What are the system requirements?",
            answer: "The system requires Python 3.8+ and at least 4GB RAM for optimal performance."
          },
          {
            question: "Is there commercial support available?",
            answer: "Yes, we offer commercial support and enterprise plans. Contact us for more information."
          }
        ],
      
      
        
        
    
        
  },









  {
    // css for the card

    id: 26,
    title: "Quality Inspection",
    description: "Automated visual inspection for manufacturing defects",
    status: "In-Progress",
    color: "accent-blue",
    priority: "high",
    category: "Computer Vision",
    progress: 71,
    deadline: "2024-04-01",
    tasksCompleted: 36,
    totalTasks: 51,
    completedMilestones: 4,
    totalMilestones: 5,
    bookmarked: false,
    thumbnail: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    team: ["Tony Stark", "Rhodey"],


    // css for the detailted report
    overview: `This project aimed to automate and streamline the quality inspection process in a production or service environment.
        It focused on identifying defects, ensuring compliance with standards, and improving overall product reliability.
        Technologies like computer vision and machine learning were integrated to detect anomalies and generate real-time reports,
        helping reduce manual errors and enhance operational efficiency.`,
    features : [
          {
            icon: '⚡',
            title: 'Real-time Processing',
            description: 'Process data in milliseconds with our optimized algorithms'
          },
          {
            icon: '🧠',
            title: 'Advanced ML Models',
            description: 'State-of-the-art models trained on diverse datasets'
          },
          {
            icon: '🔍',
            title: 'Precision Analytics',
            description: 'Get actionable insights with 95%+ accuracy'
          }
        ],
        steps :[
          {
            title: "Data Input",
            description: "The system accep images, text, or structured data.",
            icon: "fas fa-upload"
          },
          {
            title: "Preprocessing",
            description: "Input data is clele for the AI model.",
            icon: "fas fa-cogs"
          },
          {
            title: "Model Processing",
            description: "Our trained neural network analyzes the data and extracts meaningful patterns.",
            icon: "fas fa-brain"
          },
          {
            title: "Result Generation",
            description: "The sy, classifications, or insights based on the analysis.",
            icon: "fas fa-chart-bar"
          }
        ],
        techStack : [
          { name: 'React', purpose: 'Backend & ML' },
          { name: 'React', purpose: 'Model training' },
          { name: 'React', purpose: 'Frontend' },
          { name: 'React', purpose: 'Model development' },
          { name: 'React', purpose: 'Deployment' },
          { name: 'React', purpose: 'Image processing' }
        ],
      datasets : [
          { name: 'React', description: 'Object detection' },
          { name: 'React', description: 'Sentiment analysis' }
        ],

      useCases : [
          {
            icon: 'fas fa-medkit',
            title: 'Healthcare',
            description: 'Medicalnd more accurate diagnoses',
            examples: [
              'Tumor detection in MRI scans',
              'X-ray abnormality classification',
              'Patient health risk prediction'
            ],
            accentColor: '#4F8AFF'
          },
          {
            icon: 'fas fa-chart-line',
            title: 'Finance',
            description: 'Real-tial forecasting',
            examples: [
              'Credit risk assessment',
              'Algorithmic trading signals',
              'Anomaly detection in transactions'
            ],
            accentColor: '#FF7043'
          },
          {
            icon: 'fas fa-robot',
            title: 'Manufacturing',
            description: 'Prutomation',
            examples: [
              'Defect detection in production lines',
              'Equipment failure prediction',
              'Supply chain optimization'
            ],
            accentColor: '#26A69A'
          },
          {
            icon: 'fas fa-shopping-cart',
            title: 'Retail',
            description: 'Peand inventory management',
            examples: [
              'Customer behavior analysis',
              'Demand forecasting',
              'Visual product search'
            ],
            accentColor: '#AB47BC'
          }
        ],

        performanceMetrics : [
          { metric: 'Accuracy', value: '95%', comparison: '+1000000000% vs baseline' },
          { metric: 'Inference Time', value: '50ms', comparison: '2000000x faster than v1' },
          { metric: 'Precision', value: '900000003%', comparison: 'Industry average: 85%' }
        ],


        teamMembers : [
          {
            name: "John Doe",
            role: "AI Researcher",
            bio: "PhD in Computer Science with 10+ years of experience in machine learning.",
            photo: "team1.jpg",
            social: {
              linkedin: "#",
              github: "#",
              twitter: "#"
            }
          },
          {
            name: "Jane Smith",
            role: "Software Engineer",
            bio: "Full-stack developer specializing in AI deployment and scalable systems.",
            photo: "team2.jpg",
            social: {
              linkedin: "#",
              github: "#"
            }
          },
          {
            name: "Alex Johnson",
            role: "Data Scientist",
            bio: "Expert in data preprocessing and model optimization.",
            photo: "team3.jpg",
            social: {
              linkedin: "#",
              twitter: "#"
            }
          }
        ],

        milestones :[
          {
            quarter: "Q3 2023",
            title: "Initial Release",
            completed: true,
            features: ["Core functionality", "Basic API"]
          },
          {
            quarter: "Q4 2023",
            title: "Performance Improvements",
            completed: true,
            features: ["Optimized inference", "Reduced memory usage"]
          },
          {
            quarter: "Q1 2024",
            title: "New Features",
            completed: false,
            features: ["Multi-modal support", "Enhanced UI"]
          },
          {
            quarter: "Q2 2024",
            title: "Enterprise Ready",
            completed: false,
            features: ["Scalability improvements", "Admin dashboard"]
          }
        ],

        faqs : [
          {
            question: "Is this project open-source?",
            answer: "Yes, our project is completely open-source and available on GitHub under the MIT license."
          },
          {
            question: "How can I contribute to the project?",
            answer: "You can contribute by submitting pull requests, reporting issues, or improving documentation. Check our GitHub for more details."
          },
          {
            question: "What are the system requirements?",
            answer: "The system requires Python 3.8+ and at least 4GB RAM for optimal performance."
          },
          {
            question: "Is there commercial support available?",
            answer: "Yes, we offer commercial support and enterprise plans. Contact us for more information."
          }
        ],
      
      
        
    

  },




  {
    // card details
    id: 27,
    title: "Audio Transcription & Diarization",
    description: "Automatic speech-to-text with speaker identification",
    status: "Completed",
    color: "accent-purple",
    priority: "high",
    category: "Audio AI",
    progress: 100,
    deadline: "2023-08-20",
    tasksCompleted: 30,
    totalTasks: 30,
    completedMilestones: 4,
    totalMilestones: 4,
    bookmarked: true,
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    team: ["Alex Johnson", "Sarah Miller"],

    // detail report of the project
    overview: `This project provides automated transcription of audio files using OpenAI's Whisper model combined with speaker diarization from Pyannote. 
    It processes audio to identify different speakers and generates timestamped transcripts with speaker attribution, 
    making it ideal for meetings, interviews, and media analysis.`,

    features: [
        {
            icon: '⚡',
            title: 'Real-time Processing',
            description: 'Process audio in near real-time with optimized Whisper models'
        },
        {
            icon: '👥',
            title: 'Speaker Identification',
            description: 'Automatically detects and labels different speakers in conversations'
        },
        {
            icon: '⏱️',
            title: 'Precision Timestamps',
            description: 'Accurate time alignment for every spoken segment'
        }
    ],

    steps: [
        {
            title: "Audio Input",
            description: "The system accepts various audio formats including WAV, MP3, and M4A",
            icon: "fas fa-microphone"
        },
        {
            title: "Speech Recognition",
            description: "Whisper model converts speech to text with high accuracy",
            icon: "fas fa-language"
        },
        {
            title: "Speaker Diarization",
            description: "Pyannote identifies and separates different speakers",
            icon: "fas fa-users"
        },
        {
            title: "Result Synthesis",
            description: "Combines transcription with speaker labels for final output",
            icon: "fas fa-file-alt"
        },
        {
            System_architecture: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ],

    techStack: [
        { name: 'Python', purpose: 'Backend processing' },
        { name: 'Whisper', purpose: 'Speech recognition' },
        { name: 'Pyannote', purpose: 'Speaker diarization' },
        { name: 'Streamlit', purpose: 'Web interface' },
        { name: 'PyTorch', purpose: 'Deep learning backend' },
        { name: 'FFmpeg', purpose: 'Audio processing' }
    ],

    datasets: [
        { name: 'LibriSpeech', description: 'Speech recognition benchmark' },
        { name: 'VoxCeleb', description: 'Speaker identification' }
    ],

    useCases: [
        {
            icon: 'fas fa-briefcase',
            title: 'Business Meetings',
            description: 'Automatic meeting minutes with speaker attribution',
            examples: [
                'Board meeting transcription',
                'Conference call analysis',
                'Interview documentation'
            ],
            accentColor: '#4F8AFF'
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'Academic Research',
            description: 'Qualitative analysis of interviews and focus groups',
            examples: [
                'Social science research',
                'Linguistic studies',
                'Oral history preservation'
            ],
            accentColor: '#FF7043'
        },
        {
            icon: 'fas fa-podcast',
            title: 'Media Production',
            description: 'Transcript generation for podcasts and videos',
            examples: [
                'Podcast show notes',
                'Video subtitling',
                'Content repurposing'
            ],
            accentColor: '#26A69A'
        },
        {
            icon: 'fas fa-balance-scale',
            title: 'Legal Proceedings',
            description: 'Deposition and courtroom transcription',
            examples: [
                'Witness testimony documentation',
                'Legal record keeping',
                'Evidence analysis'
            ],
            accentColor: '#AB47BC'
        }
    ],

    performanceMetrics: [
        { metric: 'Transcription Accuracy', value: '95%', comparison: '+10% vs baseline' },
        { metric: 'Processing Speed', value: '1.5x realtime', comparison: '2x faster than manual' },
        { metric: 'Speaker Identification', value: '92%', comparison: 'Industry average: 85%' }
    ],

    teamMembers: [
        {
            name: "Alex Johnson",
            role: "Audio AI Engineer",
            bio: "Specialist in speech recognition with 8 years of experience in audio processing.",
            photo: "team1.jpg",
            social: {
                linkedin: "#",
                github: "#",
                twitter: "#"
            }
        },
        {
            name: "Sarah Miller",
            role: "ML Researcher",
            bio: "Expert in deep learning models for speech applications and NLP.",
            photo: "team2.jpg",
            social: {
                linkedin: "#",
                github: "#"
            }
        },
        {
            name: "James Wilson",
            role: "Frontend Developer",
            bio: "Specializes in building intuitive interfaces for AI applications.",
            photo: "team3.jpg",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ],

    milestones: [
        {
            quarter: "Q1 2023",
            title: "Core Functionality",
            completed: true,
            features: ["Basic transcription", "Single speaker support"]
        },
        {
            quarter: "Q2 2023",
            title: "Multi-speaker Support",
            completed: true,
            features: ["Speaker diarization", "Speaker labeling"]
        },
        {
            quarter: "Q3 2023",
            title: "Performance Optimization",
            completed: true,
            features: ["Faster processing", "Reduced memory usage"]
        },
        {
            quarter: "Q4 2023",
            title: "Enterprise Features",
            completed: false,
            features: ["Batch processing", "API integration"]
        }
    ],

    faqs: [
        {
            question: "What audio formats are supported?",
            answer: "The system supports WAV, MP3, OGG, and M4A formats, with WAV recommended for best quality."
        },
        {
            question: "How many speakers can it identify?",
            answer: "The system can identify 2-10 speakers depending on audio quality and length."
        },
        {
            question: "Is the processing done locally?",
            answer: "Yes, all processing happens on your machine - no audio data is sent to external servers."
        },
        {
            question: "Can I edit the transcripts after processing?",
            answer: "Yes, the output includes editable text files with speaker labels and timestamps."
        }
    ],

    

    

    



},


{
  // card details
  id: 30,
  title: "Audio Transcription & Diarization",
  description: "Automatic speech-to-text with speaker identification",
  status: "Completed",
  color: "accent-purple",
  priority: "high",
  category: "Audio AI",
  progress: 100,
  deadline: "2023-08-20",
  tasksCompleted: 30,
  totalTasks: 30,
  completedMilestones: 4,
  totalMilestones: 4,
  bookmarked: true,
  thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  team: ["Alex Johnson", "Sarah Miller"],

  // detail report of the project
  overview: `This project provides automated transcription of audio files using OpenAI's Whisper model combined with speaker diarization from Pyannote. 
  It processes audio to identify different speakers and generates timestamped transcripts with speaker attribution, 
  making it ideal for meetings, interviews, and media analysis.`,

  features: [
      {
          icon: '⚡',
          title: 'Real-time Processing',
          description: 'Process audio in near real-time with optimized Whisper models'
      },
      {
          icon: '👥',
          title: 'Speaker Identification',
          description: 'Automatically detects and labels different speakers in conversations'
      },
      {
          icon: '⏱️',
          title: 'Precision Timestamps',
          description: 'Accurate time alignment for every spoken segment'
      }
  ],

  steps: [
      {
          title: "Audio Input",
          description: "The system accepts various audio formats including WAV, MP3, and M4A",
          icon: "fas fa-microphone"
      },
      {
          title: "Speech Recognition",
          description: "Whisper model converts speech to text with high accuracy",
          icon: "fas fa-language"
      },
      {
          title: "Speaker Diarization",
          description: "Pyannote identifies and separates different speakers",
          icon: "fas fa-users"
      },
      {
          title: "Result Synthesis",
          description: "Combines transcription with speaker labels for final output",
          icon: "fas fa-file-alt"
      },
      {
          System_architecture: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
  ],

  techStack: [
      { name: 'Python', purpose: 'Backend processing' },
      { name: 'Whisper', purpose: 'Speech recognition' },
      { name: 'Pyannote', purpose: 'Speaker diarization' },
      { name: 'Streamlit', purpose: 'Web interface' },
      { name: 'PyTorch', purpose: 'Deep learning backend' },
      { name: 'FFmpeg', purpose: 'Audio processing' }
  ],

  datasets: [
      { name: 'LibriSpeech', description: 'Speech recognition benchmark' },
      { name: 'VoxCeleb', description: 'Speaker identification' }
  ],

  useCases: [
      {
          icon: 'fas fa-briefcase',
          title: 'Business Meetings',
          description: 'Automatic meeting minutes with speaker attribution',
          examples: [
              'Board meeting transcription',
              'Conference call analysis',
              'Interview documentation'
          ],
          accentColor: '#4F8AFF'
      },
      {
          icon: 'fas fa-graduation-cap',
          title: 'Academic Research',
          description: 'Qualitative analysis of interviews and focus groups',
          examples: [
              'Social science research',
              'Linguistic studies',
              'Oral history preservation'
          ],
          accentColor: '#FF7043'
      },
      {
          icon: 'fas fa-podcast',
          title: 'Media Production',
          description: 'Transcript generation for podcasts and videos',
          examples: [
              'Podcast show notes',
              'Video subtitling',
              'Content repurposing'
          ],
          accentColor: '#26A69A'
      },
      {
          icon: 'fas fa-balance-scale',
          title: 'Legal Proceedings',
          description: 'Deposition and courtroom transcription',
          examples: [
              'Witness testimony documentation',
              'Legal record keeping',
              'Evidence analysis'
          ],
          accentColor: '#AB47BC'
      }
  ],

  performanceMetrics: [
      { metric: 'Transcription Accuracy', value: '95%', comparison: '+10% vs baseline' },
      { metric: 'Processing Speed', value: '1.5x realtime', comparison: '2x faster than manual' },
      { metric: 'Speaker Identification', value: '92%', comparison: 'Industry average: 85%' }
  ],

  teamMembers: [
      {
          name: "Alex Johnson",
          role: "Audio AI Engineer",
          bio: "Specialist in speech recognition with 8 years of experience in audio processing.",
          photo: "team1.jpg",
          social: {
              linkedin: "#",
              github: "#",
              twitter: "#"
          }
      },
      {
          name: "Sarah Miller",
          role: "ML Researcher",
          bio: "Expert in deep learning models for speech applications and NLP.",
          photo: "team2.jpg",
          social: {
              linkedin: "#",
              github: "#"
          }
      },
      {
          name: "James Wilson",
          role: "Frontend Developer",
          bio: "Specializes in building intuitive interfaces for AI applications.",
          photo: "team3.jpg",
          social: {
              linkedin: "#",
              twitter: "#"
          }
      }
  ],

  milestones: [
      {
          quarter: "Q1 2023",
          title: "Core Functionality",
          completed: true,
          features: ["Basic transcription", "Single speaker support"]
      },
      {
          quarter: "Q2 2023",
          title: "Multi-speaker Support",
          completed: true,
          features: ["Speaker diarization", "Speaker labeling"]
      },
      {
          quarter: "Q3 2023",
          title: "Performance Optimization",
          completed: true,
          features: ["Faster processing", "Reduced memory usage"]
      },
      {
          quarter: "Q4 2023",
          title: "Enterprise Features",
          completed: false,
          features: ["Batch processing", "API integration"]
      }
  ],

  faqs: [
      {
          question: "What audio formats are supported?",
          answer: "The system supports WAV, MP3, OGG, and M4A formats, with WAV recommended for best quality."
      },
      {
          question: "How many speakers can it identify?",
          answer: "The system can identify 2-10 speakers depending on audio quality and length."
      },
      {
          question: "Is the processing done locally?",
          answer: "Yes, all processing happens on your machine - no audio data is sent to external servers."
      },
      {
          question: "Can I edit the transcripts after processing?",
          answer: "Yes, the output includes editable text files with speaker labels and timestamps."
      }
  ],

  

  

  



},




{
  // card details
  id: 53,
  title: "Nexus Home Hub Pro",
  description: "Next-gen AI-powered smart home automation with voice, touch, and predictive controls",
  status: "In Development",
  color: "accent-orange",
  priority: "high",
  category: "IoT + AI",
  progress: 68,
  deadline: "2024-05-15",
  tasksCompleted: 34,
  totalTasks: 50,
  completedMilestones: 3,
  totalMilestones: 6,
  bookmarked: true,
  thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  team: ["Mark Zuber", "Lisa Ray", "David Kim", "Sarah Connor", "Raj Patel"],

  // detail report
  overview: `The Nexus Home Hub Pro revolutionizes home automation by combining IoT device control with 
  predictive AI that learns user behavior patterns. Supporting 300+ devices across 15 protocols, 
  it features military-grade encryption, 99.9% uptime, and reduces energy costs by 35% on average. 
  The system includes voice, touch, and gesture controls with <500ms response time.`,

  features: [
      {
          icon: '🤖',
          title: 'Predictive Automation',
          description: 'Anticipates routines with 92% accuracy after 2 weeks'
      },
      {
          icon: '🔒',
          title: 'Quantum Encryption',
          description: 'Unhackable device communication (NSA-certified)'
      },
      {
          icon: '🌐',
          title: 'Multi-Protocol',
          description: 'Zigbee, Z-Wave, Matter, Thread, WiFi 6E, Bluetooth Mesh'
      },
      {
          icon: '💬',
          title: 'Natural Language',
          description: 'Understands 50+ languages and dialects'
      },
      {
          icon: '⚡',
          title: 'Energy Optimizer',
          description: 'Dynamically adjusts devices to save 35% power'
      },
      {
          icon: '👁️',
          title: 'Computer Vision',
          description: 'Camera-based presence detection and security'
      }
  ],

  steps: [
      {
          title: "Device Onboarding",
          description: "Automated discovery and secure pairing for all supported devices",
          icon: "fas fa-plug"
      },
      {
          title: "Network Formation",
          description: "Creates self-healing mesh network with 128-bit encryption",
          icon: "fas fa-project-diagram"
      },
      {
          title: "Behavior Modeling",
          description: "60+ machine learning features analyze usage patterns",
          icon: "fas fa-brain"
      },
      {
          title: "Automation Rules",
          description: "If-This-Then-That engine with 15 trigger types",
          icon: "fas fa-robot"
      },
      {
          title: "User Interfaces",
          description: "Voice, mobile app, web dashboard, and wall control panels",
          icon: "fas fa-tablet-alt"
      },
      {
          System_architecture: "https://example.com/nexus-architecture.jpg",
          Data_flow: "https://example.com/nexus-dataflow.png",
          Security_layers: "https://example.com/nexus-security.png"
      }
  ],

  techStack: [
      { name: 'Rust', purpose: 'Core hub firmware' },
      { name: 'TensorFlow Lite', purpose: 'Edge AI processing' },
      { name: 'React Native', purpose: 'Cross-platform mobile apps' },
      { name: 'Matter', purpose: 'IoT standard protocol' },
      { name: 'PostgreSQL', purpose: 'Time-series analytics' },
      { name: 'WebRTC', purpose: 'Real-time camera feeds' },
      { name: 'Kubernetes', purpose: 'Cloud backend' },
      { name: 'OpenCV', purpose: 'Vision processing' }
  ],

  datasets: [
      { 
          name: 'HomePatterns v3', 
          description: '10,000+ home usage scenarios across 15 countries',
          size: '45TB'
      },
      { 
          name: 'EnergyOpt', 
          description: 'Device-level power consumption metrics',
          size: '12TB'
      },
      { 
          name: 'VoiceCommands', 
          description: '2 million natural language samples',
          size: '8TB'
      }
  ],

  useCases: [
      {
          icon: 'fas fa-thermometer-half',
          title: 'Climate Automation',
          description: 'Whole-home temperature optimization',
          examples: [
              'Learns occupancy patterns',
              'Integrates with weather forecasts',
              'Room-by-room zoning'
          ],
          accentColor: '#4F8AFF',
          savings: 'Saves 25-40% on HVAC costs'
      },
      {
          icon: 'fas fa-lightbulb',
          title: 'Adaptive Lighting',
          description: 'Context-aware illumination',
          examples: [
              'Sunrise simulation',
              'Movie mode lighting',
              'Security lighting sequences'
          ],
          accentColor: '#FFC107',
          savings: 'Reduces lighting energy by 60%'
      },
      {
          icon: 'fas fa-shield-alt',
          title: 'Integrated Security',
          description: 'Smart protection systems',
          examples: [
              'Fake occupancy mode',
              'Glass break detection',
              'Automated emergency alerts'
          ],
          accentColor: '#F44336',
          response: '200ms alert triggering'
      },
      {
          icon: 'fas fa-utensils',
          title: 'Kitchen Automation',
          description: 'Smart appliance integration',
          examples: [
              'Recipe-guided cooking',
              'Inventory tracking',
              'Safety cutoffs'
          ],
          accentColor: '#4CAF50',
          efficiency: 'Cuts food waste by 30%'
      }
  ],

  performanceMetrics: [
      { 
          metric: 'Response Time', 
          value: '380ms', 
          comparison: '2.5x faster than EcoBee', 
          benchmark: 'Industry avg: 900ms' 
      },
      { 
          metric: 'Device Limit', 
          value: '300+', 
          comparison: 'Most compatible system', 
          benchmark: 'Competitors: 150-200' 
      },
      { 
          metric: 'Uptime', 
          value: '99.97%', 
          comparison: 'Enterprise-grade reliability', 
          benchmark: 'Consumer avg: 99.2%' 
      },
      { 
          metric: 'Learning Speed', 
          value: '7 days', 
          comparison: 'Fastest adaptation', 
          benchmark: 'Typical: 14-21 days' 
      }
  ],

  teamMembers: [
      {
          name: "Mark Zuber",
          role: "Chief Architect",
          bio: "15 years in IoT systems, designed 4 commercial hubs",
          photo: "team-mark.jpg",
          social: {
              linkedin: "#",
              github: "#",
              portfolio: "#"
          },
          skills: ["Embedded Systems", "Rust", "Security"]
      },
      {
          name: "Lisa Ray",
          role: "AI Lead",
          bio: "PhD in Edge AI, 8 patents in behavior prediction",
          photo: "team-lisa.jpg",
          social: {
              linkedin: "#",
              twitter: "#"
          },
          skills: ["TensorFlow", "ONNX", "Time-Series Analysis"]
      },
      {
          name: "David Kim",
          role: "UX Director",
          bio: "Created award-winning smart home interfaces",
          photo: "team-david.jpg",
          social: {
              dribbble: "#",
              behance: "#"
          },
          skills: ["Figma", "ProtoPie", "Voice Design"]
      },
      {
          name: "Sarah Connor",
          role: "QA Engineer",
          bio: "Specializes in IoT reliability testing",
          photo: "team-sarah.jpg",
          social: {
              linkedin: "#"
          },
          skills: ["Automated Testing", "Fuzz Testing"]
      },
      {
          name: "Raj Patel",
          role: "Protocol Specialist",
          bio: "Matter/Thread contributor, Zigbee certified",
          photo: "team-raj.jpg",
          social: {
              github: "#",
              twitter: "#"
          },
          skills: ["Wireless Protocols", "Low-Power Networking"]
      }
  ],

  milestones: [
      {
          quarter: "Q3 2022",
          title: "Core Platform",
          completed: true,
          features: [
              "Device control engine",
              "Basic mobile app",
              "50-device support"
          ],
          release: "v0.5 Alpha"
      },
      {
          quarter: "Q4 2022",
          title: "Security Layer",
          completed: true,
          features: [
              "End-to-end encryption",
              "Firmware signing",
              "Intrusion detection"
          ],
          certification: "NSA Level 4"
      },
      {
          quarter: "Q1 2023",
          title: "Predictive Engine",
          completed: true,
          features: [
              "Behavior modeling",
              "Energy optimization",
              "Voice control"
          ],
          accuracy: "89%"
      },
      {
          quarter: "Q2 2023",
          title: "Pro Features",
          completed: false,
          features: [
              "Multi-home management",
              "Professional install mode",
              "REST API"
          ],
          target: "Commercial release"
      },
      {
          quarter: "Q3 2023",
          title: "Retail Package",
          completed: false,
          features: [
              "DIY installation kit",
              "Starter device bundles",
              "App store integration"
          ],
          partners: ["Best Buy", "Amazon"]
      },
      {
          quarter: "Q4 2023",
          title: "Matter 2.0",
          completed: false,
          features: [
              "Thread border router",
              "Universal device driver",
              "Cloud backup"
          ],
          protocol: "Matter 2.0 Certified"
      }
  ],

  faqs: [
      {
          question: "What makes this different from Alexa/Google Home?",
          answer: "Nexus focuses on local processing (95% happens on-device), deeper automation with AI prediction, and professional-grade security - unlike cloud-dependent consumer systems."
      },
      {
          question: "Is there a monthly fee?",
          answer: "Core features are free forever. $9.99/month Pro tier adds advanced automation, unlimited cloud backup, and professional monitoring integrations."
      },
      {
          question: "How does the energy savings work?",
          answer: "Our AI tracks usage patterns, weather, and utility rates to automatically adjust devices while maintaining comfort - verified 35.2% average savings in 6-month trials."
      },
      {
          question: "What if I change my routines?",
          answer: "The system continuously adapts, with major pattern changes triggering a quick-relearn mode that adjusts in 24-48 hours."
      },
      {
          question: "Can I self-host the data?",
          answer: "Yes! Nexus is the only system offering a true self-hosted option with our Home Server edition (requires NAS or always-on PC)."
      }
  ],

  // Additional sections
  funding: {
      stage: "Series B",
      raised: "$32M",
      investors: ["a16z", "Sequoia", "Intel Capital"],
      valuation: "$280M"
  },

  patents: [
      {
          id: "US20230185982",
          title: "Adaptive Home Automation Using Federated Learning",
          status: "Pending"
      },
      {
          id: "US20230156601", 
          title: "Low-Latency IoT Mesh Network Protocol",
          status: "Granted"
      }
  ],

  certifications: [
      "Matter 1.2 Certified",
      "UL 294 Security Standard",
      "Energy Star Partner",
      "ISO 27001 Compliant"
  ],

  awards: [
      {
          name: "2023 CES Innovation Award",
          category: "Smart Home"
      },
      {
          name: "IoT Breakthrough Award",
          category: "Overall Solution"
      }
  ]
},


{
  // Card Details
  id: 78,
  title: "MediScan AI",
  description: "AI-driven diagnostic support system for radiologists",
  status: "Clinical Trials",
  color: "accent-teal",
  priority: "critical",
  category: "Healthcare AI",
  progress: 82,
  deadline: "2024-09-30",
  tasksCompleted: 127,
  totalTasks: 155,
  completedMilestones: 5,
  totalMilestones: 7,
  bookmarked: true,
  thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  team: ["Dr. Emily Chen", "Prof. Rajiv Kapoor", "Sophia Martinez", "David Zhang", "Natalie Brown", "Dr. James Wilson"],

  // Detailed Project Report
  overview: `MediScan AI is an FDA-cleared diagnostic support system that analyzes medical imaging (X-rays, CT scans, MRIs) with 98.3% accuracy in detecting 57 common pathologies. 
  The system reduces radiologist workload by 40% while catching 15% more early-stage abnormalities than human-only diagnosis in clinical trials. 
  HIPAA-compliant and integrated with all major PACS systems.`,

  // Key Features
  features: [
      {
          icon: '🩺',
          title: 'Multi-Modality Support',
          description: 'Processes X-ray, CT, MRI, and ultrasound with single AI engine'
      },
      {
          icon: '⏱️',
          title: 'Real-Time Analysis',
          description: '90-second average processing time for full studies'
      },
      {
          icon: '🔍',
          title: 'Micro-Anomaly Detection',
          description: 'Identifies sub-millimeter abnormalities (0.2mm precision)'
      },
      {
          icon: '📊',
          title: 'Clinical Dashboard',
          description: 'Prioritized case list with confidence scores and visual markers'
      },
      {
          icon: '🤝',
          title: 'Collaborative Review',
          description: 'Side-by-side comparison with historical scans'
      },
      {
          icon: '🛡️',
          title: 'Continuous Learning',
          description: 'FDA-approved incremental learning without retraining'
      }
  ],

  // Workflow Steps
  steps: [
      {
          title: "DICOM Import",
          description: "Seamless integration with hospital PACS/RIS systems",
          icon: "fas fa-file-import",
          integration: "Supports DICOM, HL7, FHIR"
      },
      {
          title: "Preprocessing",
          description: "Automated quality control and image enhancement",
          icon: "fas fa-sliders-h",
          techniques: [
              "Noise reduction",
              "Contrast optimization",
              "Artifact correction"
          ]
      },
      {
          title: "AI Analysis",
          description: "Parallel processing with ensemble deep learning models",
          icon: "fas fa-brain",
          models: [
              "3D ResNet-152",
              "Vision Transformer",
              "Custom CNN architecture"
          ]
      },
      {
          title: "Clinical Review",
          description: "Radiologist workstation with AI overlays and markers",
          icon: "fas fa-user-md",
          features: [
              "Heatmap overlays",
              "Measurement tools",
              "Comparison viewer"
          ]
      },
      {
          title: "Report Generation",
          description: "Structured findings with ACR-compliant language",
          icon: "fas fa-file-medical",
          outputs: [
              "DICOM SR",
              "PDF",
              "HL7 messages"
          ]
      },
      {
          System_architecture: "https://example.com/mediscan-architecture-v3.png",
          Data_flow: "https://example.com/mediscan-dataflow.png",
          Security_diagram: "https://example.com/mediscan-hipaa-compliance.png"
      }
  ],

  // Technology Stack
  techStack: [
      { 
          name: 'PyTorch', 
          purpose: 'Core deep learning framework',
          version: '2.0 with CUDA 12.1'
      },
      { 
          name: 'MONAI', 
          purpose: 'Medical imaging specific transforms',
          modules: ['Auto3DSeg', 'DiNTS']
      },
      { 
          name: 'OHIF Viewer', 
          purpose: 'DICOM visualization',
          customization: 'Enhanced with AI overlays'
      },
      { 
          name: 'Fast Healthcare Interoperability Resources (FHIR)', 
          purpose: 'EHR integration'
      },
      { 
          name: 'Kubernetes', 
          purpose: 'Scalable deployment',
          nodes: 'GPU-optimized A100 clusters'
      },
      { 
          name: 'Django', 
          purpose: 'Web interface',
          plugins: ['DICOM web viewer']
      }
  ],

  // Training Datasets
  datasets: [
      { 
          name: 'MediBase-7M', 
          description: '7 million de-identified studies across 57 pathologies',
          sources: [
              "Mayo Clinic",
              "Johns Hopkins",
              "NIH Clinical Center"
          ],
          diversity: [
              "25 countries represented",
              "All major demographics",
              "300+ scanner models"
          ]
      },
      { 
          name: 'RareFind-23k', 
          description: 'Curated rare conditions dataset',
          cases: '23,412 confirmed rare diagnoses',
          coverage: '137 rare conditions'
      }
  ],

  // Clinical Applications
  useCases: [
      {
          icon: 'fas fa-lungs',
          title: 'Pulmonary',
          description: 'Early detection of lung cancer and COVID-19 sequelae',
          examples: [
              '3D nodule segmentation',
              'Pleural effusion quantification',
              'Fibrosis progression tracking'
          ],
          performance: {
              sensitivity: '97.8%',
              specificity: '99.1%'
          },
          fda_cleared: true
      },
      {
          icon: 'fas fa-brain',
          title: 'Neurological',
          description: 'Stroke detection and neurodegenerative monitoring',
          examples: [
              'Hemorrhage volume calculation',
              'Early Alzheimer\'s biomarkers',
              'MS lesion tracking'
          ],
          performance: {
              sensitivity: '96.2%',
              specificity: '98.4%'
          },
          fda_cleared: true
      },
      {
          icon: 'fas fa-heart',
          title: 'Cardiac',
          description: 'Cardiovascular disease risk assessment',
          examples: [
              'Coronary calcium scoring',
              'Aortic aneurysm detection',
              'Cardiac chamber quantification'
          ],
          performance: {
              sensitivity: '95.7%',
              specificity: '97.9%'
          },
          fda_pending: true
      }
  ],

  // Performance Metrics
  performanceMetrics: [
      { 
          metric: 'Overall Accuracy', 
          value: '98.3%', 
          benchmark: 'Radiologist average: 94.7%',
          trial: 'Multi-center study (n=12,347)'
      },
      { 
          metric: 'False Negative Rate', 
          value: '0.8%', 
          benchmark: 'Clinical standard: 2-5%',
          impact: '15% more early-stage detections'
      },
      { 
          metric: 'Processing Speed', 
          value: '90 seconds', 
          benchmark: 'Traditional workflow: 15-30 mins',
          hardware: 'NVIDIA A100 80GB'
      },
      { 
          metric: 'Integration Time', 
          value: '2 hours', 
          benchmark: 'Competitors: 8-16 hours',
          standards: 'DICOM, HL7, FHIR'
      }
  ],

  // Team Members
  teamMembers: [
      {
          name: "Dr. Emily Chen",
          role: "Chief Medical Officer",
          bio: "Board-certified radiologist with 12 years at Mass General, AI implementation specialist",
          photo: "team-emily.jpg",
          credentials: [
              "MD, Harvard Medical School",
              "ABR Certified",
              "15 peer-reviewed publications"
          ],
          social: {
              linkedin: "#",
              researchgate: "#"
          }
      },
      {
          name: "Prof. Rajiv Kapoor",
          role: "Chief AI Scientist",
          bio: "Former Google Health lead, developed 3 FDA-cleared AI algorithms",
          photo: "team-rajiv.jpg",
          credentials: [
              "PhD Medical Imaging, Stanford",
              "50+ cited papers",
              "Inventor on 7 patents"
          ],
          social: {
              google_scholar: "#",
              twitter: "#"
          }
      },
      {
          name: "Sophia Martinez",
          role: "Lead Engineer",
          bio: "Medical imaging specialist, built DICOM tools used at 300+ hospitals",
          photo: "team-sophia.jpg",
          credentials: [
              "MSc Biomedical Engineering",
              "DICOM Standards Committee",
              "Open-source contributor"
          ],
          social: {
              github: "#",
              stackoverflow: "#"
          }
      }
  ],

  // Development Milestones
  milestones: [
      {
          year: "2021",
          title: "Proof of Concept",
          completed: true,
          achievements: [
              "First lung nodule detection model",
              "90% accuracy on test set",
              "$2M seed funding"
          ],
          papers: [
              "Published in Radiology AI Journal"
          ]
      },
      {
          year: "2022",
          title: "FDA 510(k) Clearance",
          completed: true,
          achievements: [
              "Pulmonary module cleared",
              "First hospital deployment",
              "CE Mark obtained"
          ],
          regulatory: [
              "FDA Class II Medical Device",
              "HIPAA compliant"
          ]
      },
      {
          year: "2023",
          title: "Multi-Center Trial",
          completed: true,
          achievements: [
              "12 hospital partners",
              "98.3% overall accuracy",
              "40% workflow reduction"
          ],
          publications: [
              "New England Journal of Medicine"
          ]
      },
      {
          year: "2024",
          title: "Neurological Expansion",
          completed: false,
          goals: [
              "Stroke detection module",
              "EU MDR certification",
              "5 new patents"
          ],
          targets: [
              "Q3 2024 completion",
              "50+ hospital deployments"
          ]
      }
  ],

  // Clinical Validation
  clinicalStudies: [
      {
          name: "MAESTRO Trial",
          phase: "III",
          participants: "8,742 patients",
          findings: [
              "15.2% increase in early cancer detection",
              "38.7% reduction in reading time",
              "99.1% specificity"
          ],
          published: "JAMA Network Open 2023"
      },
      {
          name: "NeuroVision Study",
          phase: "II",
          participants: "3,215 scans",
          findings: [
              "96.5% sensitivity for acute stroke",
              "Detected 22% more small vessel disease",
              "Changed management in 8.3% cases"
          ],
          status: "Under peer review"
      }
  ],

  // Frequently Asked Questions
  faqs: [
      {
          question: "How does MediScan handle false positives?",
          answer: "Our triage system flags uncertain findings (5-15% confidence range) for special review, and continuously improves through clinician feedback loops."
      },
      {
          question: "What's the minimum hardware requirement?",
          answer: "Cloud version requires only a web browser. On-premise needs: NVIDIA A10G (24GB) minimum, A100 recommended for full functionality."
      },
      {
          question: "How is patient privacy protected?",
          answer: "All data encrypted in transit/at rest (AES-256), full HIPAA compliance, and optional on-premise deployment with zero PHI leaving hospital."
      },
      {
          question: "Can it replace radiologists?",
          answer: "No - MediScan is a decision support tool. Final diagnosis always requires physician review, as mandated by FDA clearance."
      }
  ],

  // Additional Sections
  regulatory: [
      {
          name: "FDA 510(k) Clearance",
          id: "K223671",
          date: "2022-11-15",
          scope: "Pulmonary nodule detection"
      },
      {
          name: "CE Mark",
          id: "CM-2023-MED-0077",
          date: "2023-03-22",
          scope: "EU Medical Device Regulation"
      }
  ],

  partnerships: [
      {
          name: "Mayo Clinic",
          type: "Clinical Validation",
          since: "2021",
          projects: [
              "Ground truth dataset creation",
              "Multi-center trial leadership"
          ]
      },
      {
          name: "NVIDIA",
          type: "Technology",
          since: "2022",
          benefits: [
              "Early access to GPU architectures",
              "Joint optimization workshops"
          ]
      }
  ],

  pricing: {
      model: "Annual Subscription",
      tiers: [
          {
              name: "Basic",
              price: "$45,000/year",
              features: [
                  "Pulmonary module",
                  "Cloud hosting",
                  "Standard support"
              ]
          },
          {
              name: "Enterprise",
              price: "$120,000/year",
              features: [
                  "All specialty modules",
                  "On-premise deployment",
                  "Priority AI retraining"
              ]
          }
      ],
      trials: "90-day pilot program available"
  }
}












  

];














export const categories = [
  { id: "all", name: "All Projects" },
  { id: "Analytics", name: "Analytics" },
  { id: "Computer Vision", name: "Computer Vision" },
  { id: "NLP", name: "Natural Language" },
  { id: "Visualization", name: "Visualization" },
  { id: "Machine Learning", name: "Machine Learning" }
];






