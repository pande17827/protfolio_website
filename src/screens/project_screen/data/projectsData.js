export const projects = [
  // Previous projects (1-6)...
  // // 
  








  








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






