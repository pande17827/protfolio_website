export const projects = [
  // Previous projects (1-6)...
  // // 
  
{
    "id": 101,
    "title": "MediVision AI",
    "description": "AI-powered diagnostic imaging analysis platform",
    "status": "Beta Testing",
    "color": "accent-blue",
    "priority": "high",
    "category": "Medical AI",
    "progress": 68,
    "deadline": "2024-12-15",
    "tasksCompleted": 34,
    "totalTasks": 50,
    "completedMilestones": 3,
    "totalMilestones": 6,
    "bookmarked": true,
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "team": ["Dr. Sarah Johnson", "Prof. Michael Chen", "Emma Wilson", "David Kim", "Lisa Rodriguez"],
    
    "overview": "MediVision AI is a cutting-edge diagnostic platform that uses deep learning to analyze medical images with 97.5% accuracy across 42 common conditions. The system reduces radiologist interpretation time by 35% while improving early detection rates by 18% compared to traditional methods.",
    
    "features": [
      {
        "icon": "🖼️",
        "title": "Multi-Format Support",
        "description": "Processes DICOM, JPEG, PNG, and TIFF formats seamlessly"
      },
      {
        "icon": "⚡",
        "title": "Rapid Analysis",
        "description": "Average processing time of 45 seconds per study"
      },
      {
        "icon": "🔬",
        "title": "Precision Detection",
        "description": "Identifies abnormalities as small as 0.3mm"
      },
      {
        "icon": "📈",
        "title": "Trend Analysis",
        "description": "Tracks progression across multiple studies"
      }
    ],
    
    "steps": [
      {
        "title": "Image Upload",
        "description": "Drag-and-drop interface with PACS integration",
        "icon": "fas fa-upload",
        "integration": "DICOM, HL7, FHIR"
      },
      {
        "title": "Quality Control",
        "description": "Automated image quality assessment",
        "icon": "fas fa-check-circle",
        "techniques": [
          "Artifact detection",
          "Contrast adjustment",
          "Noise reduction"
        ]
      },
      {
        "title": "AI Processing",
        "description": "Parallel analysis with ensemble models",
        "icon": "fas fa-cogs",
        "models": [
          "3D U-Net",
          "EfficientNet-B7",
          "Vision Transformer"
        ]
      },
      {
        "title": "Physician Review",
        "description": "Interactive workstation with AI overlays",
        "icon": "fas fa-user-md",
        "features": [
          "Heatmap visualization",
          "Measurement tools",
          "Comparison view"
        ]
      },
      {
        "System_architecture": "https://example.com/medivision-arch-v2.png",
        "Data_flow": "https://example.com/medivision-dataflow.png"
      }
    ],
    
    "techStack": [
      { 
        "name": "TensorFlow", 
        "purpose": "Core ML framework",
        "version": "2.12 with CUDA 11.8"
      },
      { 
        "name": "MONAI", 
        "purpose": "Medical imaging processing",
        "modules": ["DenseNet", "Auto3DSeg"]
      },
      { 
        "name": "OHIF Viewer", 
        "purpose": "DICOM visualization",
        "customization": "Enhanced with AI markers"
      },
      { 
        "name": "Kubernetes", 
        "purpose": "Cloud deployment",
        "nodes": "GPU-optimized clusters"
      }
    ],
    
    "datasets": [
      { 
        "name": "MedImage-5M", 
        "description": "5 million annotated medical images",
        "sources": [
          "Cleveland Clinic",
          "Stanford Medical",
          "NIH Cancer Imaging Archive"
        ],
        "diversity": [
          "21 countries",
          "All age groups",
          "Multiple scanner types"
        ]
      }
    ],
    
    "useCases": [
      {
        "icon": "fas fa-lungs",
        "title": "Pulmonary",
        "description": "Lung cancer screening and COVID-19 analysis",
        "examples": [
          "Nodule detection",
          "Pneumonia identification",
          "Fibrosis scoring"
        ],
        "performance": {
          "sensitivity": "96.8%",
          "specificity": "98.2%"
        },
        "fda_cleared": true
      },
      {
        "icon": "fas fa-brain",
        "title": "Neurological",
        "description": "Stroke and neurodegenerative disease assessment",
        "examples": [
          "Hemorrhage volume",
          "White matter lesions",
          "Ventricle size"
        ],
        "performance": {
          "sensitivity": "95.2%",
          "specificity": "97.8%"
        },
        "fda_pending": true
      }
    ],
    
    "performanceMetrics": [
      { 
        "metric": "Accuracy", 
        "value": "97.5%", 
        "benchmark": "Radiologist average: 93.8%"
      },
      { 
        "metric": "Processing Time", 
        "value": "45 sec", 
        "benchmark": "Traditional: 8-12 min"
      },
      { 
        "metric": "Integration", 
        "value": "90 min", 
        "benchmark": "Industry average: 6+ hours"
      }
    ],
    
    "teamMembers": [
      {
        "name": "Dr. Sarah Johnson",
        "role": "Chief Medical Officer",
        "bio": "Radiologist with 15 years experience at Mayo Clinic",
        "photo": "team-sarah.jpg",
        "credentials": [
          "MD, Johns Hopkins",
          "Board Certified Radiologist"
        ],
        "social": {
          "linkedin": "#",
          "researchgate": "#"
        }
      },
      {
        "name": "Prof. Michael Chen",
        "role": "Lead AI Researcher",
        "bio": "Former Google Health AI team lead",
        "photo": "team-michael.jpg",
        "credentials": [
          "PhD Computer Science, MIT",
          "30+ publications"
        ],
        "social": {
          "google_scholar": "#"
        }
      }
    ],
    
    "milestones": [
      {
        "year": "2022",
        "title": "Prototype Development",
        "completed": true,
        "achievements": [
          "Core algorithm validation",
          "$3M seed funding"
        ]
      },
      {
        "year": "2023",
        "title": "Pulmonary FDA Clearance",
        "completed": true,
        "achievements": [
          "510(k) clearance",
          "First hospital deployment"
        ]
      },
      {
        "year": "2024",
        "title": "Multi-Center Trial",
        "completed": false,
        "goals": [
          "500+ cases analyzed",
          "Neurology module completion"
        ]
      }
    ],
    
    "clinicalStudies": [
      {
        "name": "PULMO-AI Trial",
        "phase": "III",
        "participants": "6,542 patients",
        "findings": [
          "17% increase in early detection",
          "35% faster interpretation"
        ],
        "published": "Radiology 2023"
      }
    ],
    
    "faqs": [
      {
        "question": "How does the system handle rare conditions?",
        "answer": "Our continuous learning framework incorporates clinician feedback to improve recognition of rare findings over time."
      },
      {
        "question": "What hardware is required?",
        "answer": "Cloud version requires only a web browser. On-premise needs NVIDIA T4 or better GPU."
      }
    ],
    
    "regulatory": [
      {
        "name": "FDA 510(k)",
        "id": "K230451",
        "date": "2023-05-12",
        "scope": "Pulmonary nodule detection"
      }
    ],
    
    "partnerships": [
      {
        "name": "Mayo Clinic",
        "type": "Clinical Validation",
        "since": "2022",
        "projects": [
          "Algorithm training",
          "Clinical trials"
        ]
      }
    ],
    
    "pricing": {
      "model": "Subscription",
      "tiers": [
        {
          "name": "Starter",
          "price": "$35,000/year",
          "features": [
            "Pulmonary module",
            "Email support"
          ]
        },
        {
          "name": "Enterprise",
          "price": "$95,000/year",
          "features": [
            "All modules",
            "Priority support",
            "Custom integrations"
          ]
        }
      ],
      "trials": "60-day evaluation available"
    }
  }


  {
    "id": 101,
    "title": "MediVision AI",
    "description": "AI-powered diagnostic imaging analysis platform",
    "status": "Beta Testing",
    "color": "accent-blue",
    "priority": "high",
    "category": "Medical AI",
    "progress": 68,
    "deadline": "2024-12-15",
    "tasksCompleted": 34,
    "totalTasks": 50,
    "completedMilestones": 3,
    "totalMilestones": 6,
    "bookmarked": true,
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "team": ["Dr. Sarah Johnson", "Prof. Michael Chen", "Emma Wilson", "David Kim", "Lisa Rodriguez"],
    
    "overview": "MediVision AI is a cutting-edge diagnostic platform that uses deep learning to analyze medical images with 97.5% accuracy across 42 common conditions. The system reduces radiologist interpretation time by 35% while improving early detection rates by 18% compared to traditional methods.",
    
    "features": [
      {
        "icon": "🖼️",
        "title": "Multi-Format Support",
        "description": "Processes DICOM, JPEG, PNG, and TIFF formats seamlessly"
      },
      {
        "icon": "⚡",
        "title": "Rapid Analysis",
        "description": "Average processing time of 45 seconds per study"
      },
      {
        "icon": "🔬",
        "title": "Precision Detection",
        "description": "Identifies abnormalities as small as 0.3mm"
      },
      {
        "icon": "📈",
        "title": "Trend Analysis",
        "description": "Tracks progression across multiple studies"
      }
    ],
    
    "steps": [
      {
        "title": "Image Upload",
        "description": "Drag-and-drop interface with PACS integration",
        "icon": "fas fa-upload",
        "integration": "DICOM, HL7, FHIR"
      },
      {
        "title": "Quality Control",
        "description": "Automated image quality assessment",
        "icon": "fas fa-check-circle",
        "techniques": [
          "Artifact detection",
          "Contrast adjustment",
          "Noise reduction"
        ]
      },
      {
        "title": "AI Processing",
        "description": "Parallel analysis with ensemble models",
        "icon": "fas fa-cogs",
        "models": [
          "3D U-Net",
          "EfficientNet-B7",
          "Vision Transformer"
        ]
      },
      {
        "title": "Physician Review",
        "description": "Interactive workstation with AI overlays",
        "icon": "fas fa-user-md",
        "features": [
          "Heatmap visualization",
          "Measurement tools",
          "Comparison view"
        ]
      },
      {
        "System_architecture": "https://example.com/medivision-arch-v2.png",
        "Data_flow": "https://example.com/medivision-dataflow.png"
      }
    ],
    
    "techStack": [
      { 
        "name": "TensorFlow", 
        "purpose": "Core ML framework",
        "version": "2.12 with CUDA 11.8"
      },
      { 
        "name": "MONAI", 
        "purpose": "Medical imaging processing",
        "modules": ["DenseNet", "Auto3DSeg"]
      },
      { 
        "name": "OHIF Viewer", 
        "purpose": "DICOM visualization",
        "customization": "Enhanced with AI markers"
      },
      { 
        "name": "Kubernetes", 
        "purpose": "Cloud deployment",
        "nodes": "GPU-optimized clusters"
      }
    ],
    
    "datasets": [
      { 
        "name": "MedImage-5M", 
        "description": "5 million annotated medical images",
        "sources": [
          "Cleveland Clinic",
          "Stanford Medical",
          "NIH Cancer Imaging Archive"
        ],
        "diversity": [
          "21 countries",
          "All age groups",
          "Multiple scanner types"
        ]
      }
    ],
    
    "useCases": [
      {
        "icon": "fas fa-lungs",
        "title": "Pulmonary",
        "description": "Lung cancer screening and COVID-19 analysis",
        "examples": [
          "Nodule detection",
          "Pneumonia identification",
          "Fibrosis scoring"
        ],
        "performance": {
          "sensitivity": "96.8%",
          "specificity": "98.2%"
        },
        "fda_cleared": true
      },
      {
        "icon": "fas fa-brain",
        "title": "Neurological",
        "description": "Stroke and neurodegenerative disease assessment",
        "examples": [
          "Hemorrhage volume",
          "White matter lesions",
          "Ventricle size"
        ],
        "performance": {
          "sensitivity": "95.2%",
          "specificity": "97.8%"
        },
        "fda_pending": true
      }
    ],
    
    "performanceMetrics": [
      { 
        "metric": "Accuracy", 
        "value": "97.5%", 
        "benchmark": "Radiologist average: 93.8%"
      },
      { 
        "metric": "Processing Time", 
        "value": "45 sec", 
        "benchmark": "Traditional: 8-12 min"
      },
      { 
        "metric": "Integration", 
        "value": "90 min", 
        "benchmark": "Industry average: 6+ hours"
      }
    ],
    
    "teamMembers": [
      {
        "name": "Dr. Sarah Johnson",
        "role": "Chief Medical Officer",
        "bio": "Radiologist with 15 years experience at Mayo Clinic",
        "photo": "team-sarah.jpg",
        "credentials": [
          "MD, Johns Hopkins",
          "Board Certified Radiologist"
        ],
        "social": {
          "linkedin": "#",
          "researchgate": "#"
        }
      },
      {
        "name": "Prof. Michael Chen",
        "role": "Lead AI Researcher",
        "bio": "Former Google Health AI team lead",
        "photo": "team-michael.jpg",
        "credentials": [
          "PhD Computer Science, MIT",
          "30+ publications"
        ],
        "social": {
          "google_scholar": "#"
        }
      }
    ],
    
    "milestones": [
      {
        "year": "2022",
        "title": "Prototype Development",
        "completed": true,
        "achievements": [
          "Core algorithm validation",
          "$3M seed funding"
        ]
      },
      {
        "year": "2023",
        "title": "Pulmonary FDA Clearance",
        "completed": true,
        "achievements": [
          "510(k) clearance",
          "First hospital deployment"
        ]
      },
      {
        "year": "2024",
        "title": "Multi-Center Trial",
        "completed": false,
        "goals": [
          "500+ cases analyzed",
          "Neurology module completion"
        ]
      }
    ],
    
    "clinicalStudies": [
      {
        "name": "PULMO-AI Trial",
        "phase": "III",
        "participants": "6,542 patients",
        "findings": [
          "17% increase in early detection",
          "35% faster interpretation"
        ],
        "published": "Radiology 2023"
      }
    ],
    
    "faqs": [
      {
        "question": "How does the system handle rare conditions?",
        "answer": "Our continuous learning framework incorporates clinician feedback to improve recognition of rare findings over time."
      },
      {
        "question": "What hardware is required?",
        "answer": "Cloud version requires only a web browser. On-premise needs NVIDIA T4 or better GPU."
      }
    ],
    
    "regulatory": [
      {
        "name": "FDA 510(k)",
        "id": "K230451",
        "date": "2023-05-12",
        "scope": "Pulmonary nodule detection"
      }
    ],
    
    "partnerships": [
      {
        "name": "Mayo Clinic",
        "type": "Clinical Validation",
        "since": "2022",
        "projects": [
          "Algorithm training",
          "Clinical trials"
        ]
      }
    ],
    
    "pricing": {
      "model": "Subscription",
      "tiers": [
        {
          "name": "Starter",
          "price": "$35,000/year",
          "features": [
            "Pulmonary module",
            "Email support"
          ]
        },
        {
          "name": "Enterprise",
          "price": "$95,000/year",
          "features": [
            "All modules",
            "Priority support",
            "Custom integrations"
          ]
        }
      ],
      "trials": "60-day evaluation available"
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






