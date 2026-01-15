document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        // Conversational AI & Virtual Assistants
        {
            category: "Conversational AI & Virtual Assistants",
            title: "Smart AI Assistant",
            description: "Real-time AI-powered conversational assistant providing instant responses to customer inquiries, dramatically enhancing communication efficiency and customer satisfaction.",
            tech: ["LLM-based Engine", "OpenAI GPT", "Session Management"]
        },
        {
            category: "Conversational AI & Virtual Assistants",
            title: "Form Filling Assistant Chatbot",
            description: "Intelligent chatbot designed to guide users through complex form filling processes with precision and accuracy, reducing errors and ensuring data completeness.",
            tech: ["LLM-based Engine", "OpenAI GPT", "Session Management"]
        },
        {
            category: "Conversational AI & Virtual Assistants",
            title: "Knowledge Base Chatbot",
            description: "Specialized AI chatbot providing comprehensive information from your organization's knowledge base, policies, and documentation with rule-based validation.",
            tech: ["LLM-based Engine", "OpenAI GPT", "Rule-based Validation"]
        },
        // Document Intelligence & Processing
        {
            category: "Document Intelligence & Processing",
            title: "Automated Report Generation from Transcripts",
            description: "Automated system that generates precise reports directly from meeting transcripts, interviews, or recorded sessions, eliminating manual data entry and reducing errors.",
            tech: ["RAG", "Entity Extraction", "Azure Document Intelligence"]
        },
        {
            category: "Document Intelligence & Processing",
            title: "Intelligent Text Summarization",
            description: "Advanced AI system that produces concise, accurate summaries of complex documents, reports, and business communications, accelerating decision-making.",
            tech: ["OpenAI GPT", "Chain-of-Prompts"]
        },
        {
            category: "Document Intelligence & Processing",
            title: "Document Q&A System",
            description: "Interactive AI-powered question-answering system that provides instant, accurate responses about specific documents in natural language.",
            tech: ["LLM Engine", "RAG", "OpenAI GPT"]
        },
        {
            category: "Document Intelligence & Processing",
            title: "Intelligent Document Extraction",
            description: "AI solution for automatically extracting relevant information and metadata from business documents including PDFs, images, and scanned files.",
            tech: ["RAG", "Azure Document Intelligence"]
        },
        {
            category: "Document Intelligence & Processing",
            title: "Document Anomaly Detection",
            description: "Intelligent system that identifies anomalies, inconsistencies, and potential issues in business documents automatically to ensure integrity and compliance.",
            tech: ["Vision LLM", "Azure Document Intelligence"]
        },
        {
            category: "Document Intelligence & Processing",
            title: "Metadata Extraction & Classification",
            description: "Automated extraction of critical metadata from business documents, enabling efficient organization, categorization, and analysis.",
            tech: ["RAG", "Azure Document Intelligence"]
        },
        // Advanced Search & Query Intelligence
        {
            category: "Advanced Search & Query Intelligence",
            title: "Natural Language to SQL Converter",
            description: "Converts plain English queries into precise SQL statements, enabling non-technical users to perform complex database searches without SQL knowledge.",
            tech: ["NLP to SQL", "Chain-of-Prompts"]
        },
        {
            category: "Advanced Search & Query Intelligence",
            title: "Intelligent Document Search",
            description: "Specialized search system providing quick access to specific details within large document repositories, reducing the time employees spend locating information.",
            tech: ["RAG", "Entity Extraction"]
        },
        {
            category: "Advanced Search & Query Intelligence",
            title: "Database Insights Generator",
            description: "Extracts meaningful insights and patterns from SQL databases using AI-driven analysis. Transforms raw data into actionable intelligence.",
            tech: ["NLP to SQL", "Chain-of-Prompts"]
        },
        // Intelligent AI Agents
        {
            category: "Intelligent AI Agents",
            title: "Research & Information Retrieval Agent",
            description: "Autonomous AI agent that retrieves relevant information, research, and knowledge based on specific queries with high accuracy across multiple data sources.",
            tech: ["RAG", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Image Analysis & Description Agent",
            description: "Vision-based AI agent that analyzes and provides detailed descriptions of images, diagrams, charts, and visual content to extract insights from visual data.",
            tech: ["Vision LLM", "Azure Document Intelligence"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Key Information Extraction Agent",
            description: "Specialized agent that automatically identifies and extracts key information, entities, and data points from documents and communications.",
            tech: ["RAG", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Document Parsing & Understanding Agent",
            description: "Comprehensive document parsing agent that analyzes, understands, and structures documents for efficient processing and relationship mapping.",
            tech: ["RAG", "Azure Document Intelligence"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Timeline Generation Agent",
            description: "Intelligent agent that automatically constructs comprehensive timelines from documents, transcripts, and historical data for better analysis.",
            tech: ["RAG", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Content Extraction & Categorization Agent",
            description: "Specialized agent that identifies, extracts, and categorizes specific content types from documents for systematic organization and retrieval.",
            tech: ["RAG", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Quality Assessment Agent",
            description: "Advanced analytical agent that assesses quality, completeness, and reliability of data and content, providing objective evaluation scores.",
            tech: ["OpenAI GPT", "Chain-of-Prompts", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Decision Support Agent",
            description: "Sophisticated AI system that analyzes data to provide data-driven recommendations and actionable insights for critical business decisions.",
            tech: ["OpenAI GPT", "Chain-of-Prompts", "Entity Extraction"]
        },
        {
            category: "Intelligent AI Agents",
            title: "Automated Report Generation Agent",
            description: "Automated agent that creates comprehensive business reports based on data analysis and requirements, ensuring consistency and professional formatting.",
            tech: ["RAG", "OpenAI GPT"]
        },
        // Specialized Business Tools
        {
            category: "Specialized Business Tools",
            title: "Content Builder Assistant",
            description: "Enhanced AI-powered tool that guides users through creating business content with a dynamic, step-by-step process to ensure quality and alignment.",
            tech: ["Fine-tuned Models", "OpenAI GPT"]
        },
        {
            category: "Specialized Business Tools",
            title: "Document Creation & Review Helper",
            description: "Comprehensive tool for drafting business documents and contracts. Provides intelligent suggestions, validates completeness, and ensures clarity.",
            tech: ["Fine-tuned Models", "OpenAI GPT", "Chain-of-Prompts"]
        },
        {
            category: "Specialized Business Tools",
            title: "Smart Matching & Recommendation System",
            description: "AI-driven recommendation system that intelligently matches requirements with optimal resources, vendors, or solutions based on historical data.",
            tech: ["LLM Engine", "Entity Extraction"]
        },
        {
            category: "Specialized Business Tools",
            title: "Automated Scheduling & Planning System",
            description: "Intelligent scheduling system that automatically creates optimal schedules based on requirements, constraints, and availability to improve efficiency.",
            tech: ["RAG", "Entity Extraction"]
        }
    ];

    const projectGallery = document.getElementById('project-gallery');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');

    if (!projectGallery || !categoryFilter || !searchInput) return;

    // Function to display projects
    function displayProjects(filteredProjects) {
        projectGallery.innerHTML = filteredProjects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
    
    // Function to filter and search projects
    function filterAndSearch() {
        const category = categoryFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filteredProjects = projectsData.filter(p => {
            const categoryMatch = category === 'all' || p.category === category;
            const searchMatch = !searchTerm || 
                p.title.toLowerCase().includes(searchTerm) || 
                p.description.toLowerCase().includes(searchTerm);
            return categoryMatch && searchMatch;
        });
        
        displayProjects(filteredProjects);
    }

    // Populate categories in the filter dropdown
    const categories = [...new Set(projectsData.map(p => p.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Event Listeners
    categoryFilter.addEventListener('change', filterAndSearch);
    searchInput.addEventListener('keyup', filterAndSearch);

    // Initial display of all projects
    displayProjects(projectsData);

});