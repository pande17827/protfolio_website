export const projects = [

  // first project:-yotube summary generator
  {

    // card details
    id: 1,
    title: "YouTube Transcript Summarizer",
    description: "A Streamlit-based app that extracts a YouTube video's transcript and generates a summarized version using a local LLaMA3.2 1B model.",
    status: "Completed",
    color: "accent-purple",
    priority: "low",
    category: "AI Application",
    progress: 100,
    deadline: "2023-06-15",
    tasksCompleted: 45,
    totalTasks: 45,
    completedMilestones: 5,
    totalMilestones: 5,
    bookmarked: true,
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    team: ["Myself"],

    // detail report of the project
    overview: "This project provides an easy way to summarize long YouTube videos using AI. It leverages YouTubeTranscriptApi to fetch transcripts and a locally hosted LLaMA3.2 1B model via Langchain Ollama for summarization.",
    features : [
          {
            icon: "📝",
            title: "Transcript Extraction",
            description: "Automatically pulls transcripts from YouTube videos.",
          },
          {
            icon: "🤖",
            title: "AI-Powered Summarization",
            description: "Summarizes transcripts using a local LLaMA3.2 model via Langchain."
          },
          {
            icon: "📺",
            title: "Visual Feedback",
            description: "Displays video thumbnail for better user context."
          }
          
        ],

    steps :[
        {
            title: "Extract YouTube Transcript",
            description: "Uses `youtube_transcript_api` to fetch the transcript of a given YouTube video.",
            icon: "🔍",
            techniques: ["Transcript Aggregation"],
            outputs: ["Transcript Text"]
          },
          {
            title: "Summarize Transcript with AI",
            description: "Sends transcript to a local LLaMA3.2 1B model to generate a structured summary.",
            icon: "🧠",
            models: ["LLaMA3.2 1B"],
            techniques: ["Prompt Engineering", "Langchain Invocation"],
            outputs: ["Textual Summary"]
          },
          {
            title: "Display on Streamlit UI",
            description: "Uses Streamlit to create a user-friendly interface for input and output.",
            icon: "💻",
            integration: "Streamlit"
          }
        ],
      techStack : [
        {
            name: "Streamlit",
            purpose: "Frontend UI rendering"
          },
          {
            name: "youtube-transcript-api",
            purpose: "Fetching YouTube video transcripts"
          },
          {
            name: "Langchain",
            purpose: "LLM framework integration",
            modules: ["chat_models"],
            version: "latest"
          },
          {
            name: "Ollama",
            purpose: "Running local LLMs like LLaMA",
            nodes: "llama3.2:1b"
          }
        ],
      datasets : [
          { name: 'NONE', description: 'NO,dataset is used' },
          
        ],

        useCases : [
          {
      icon: "🎓",
      title: "Educational Video Summarization",
      description: "Helps students quickly understand video lectures.",
      examples: ["Online courses", "Tutorials", "Recorded webinars"],
      performance: {
        sensitivity: "High",
        specificity: "Moderate"
      }
    },
    {
      icon: "📰",
      title: "Content Creation & Notes",
      description: "Assists creators in quickly creating summaries and notes.",
      examples: ["Blog writers", "Researchers", "Podcasters"],
      performance: {
        sensitivity: "High",
        specificity: "High"
      }
    }
        ],

        performanceMetrics : [
            {
                metric: "Summary Accuracy",
                value: "95%",
                benchmark: "Human Evaluation",
                hardware: "RTX 3050 4GB",
                standards: "Readable, 250-word max"
              }
        ],

        teamMembers : [
            {
                name: "Myself",
                role: "AI Engineer",
                bio: "Full-stack AI developer focusing on productivity-enhancing tools.",
                photo: "https://yourdomain.com/your-photo.jpg",
                credentials: ["Python", "Streamlit", "LLMs", "Langchain"],
                social: {
                  github: "https://github.com/yourusername",
                  linkedin: "https://linkedin.com/in/yourprofile"
                }
              }
        ],

        milestones :[
          {
            quarter: "Q3 2024",
            title: "Initial Release",
            completed: true,
            features: ["Transcript Extraction", "Basic UI", "Working Summary Output"]
          },
          {
            quarter: "Q1 2025",
            title: "Local LLM Integration",
            completed: true,
            features: ["Langchain + Ollama integration", "Streamlined prompt"]
        },
          {
            quarter: "Q1 2025",
            title: "Deployment",
            completed: false,
            features: ["Hosted locally", "User-tested"]
          },
        //   
        ],
      faqs : [
        {
            question: "Does it work with all YouTube videos?",
            answer: "It works with most videos that have subtitles enabled."
          },
          {
            question: "Is the LLM hosted locally?",
            answer: "Yes, the LLaMA3.2 1B model is run locally using Ollama."
          }
        ],
      
      
        
        
    
        
  },



];














export const categories = [
  { id: "all", name: "All Projects" },
  { id: "Analytics", name: "Analytics" },
  { id: "Computer Vision", name: "Computer Vision" },
  { id: "NLP", name: "Natural Language" },
  { id: "Visualization", name: "Visualization" },
  { id: "Machine Learning", name: "Machine Learning" }
];






