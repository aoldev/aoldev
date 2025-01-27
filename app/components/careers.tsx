'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
    FileText,
    Users,
    Briefcase,
    HelpCircle,
    Mail,
    Code,
    Globe,
    Target,
    GitMerge,
    ChevronDown,
    Book,
    Layers,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

// Career Opportunities Section Data
const CareerOpportunities = [
    {
        title: 'Frontend Developer',
        type: 'Full-time',
        description: 'Build intuitive user interfaces for our AI-powered platform.',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'AI Research Scientist',
        type: 'Remote',
        description: 'Advance AI capabilities through machine learning research.',
        skills: ['Python', 'Machine Learning', 'Deep Learning'],
    },
    {
        title: 'Technical Writer',
        type: 'Part-time',
        description: 'Create comprehensive documentation for our technical ecosystem.',
        skills: ['Technical Writing', 'Markdown', 'API Documentation'],
    },
];

// Contribution Guidelines Section Data
const ContributionGuidelines = [
    {
        title: 'Code Contributions',
        icon: <Code className="w-6 h-6 text-purple-500" />,
        description: 'Elevate our codebase through high-quality, innovative contributions.',
        sections: [
            {
                heading: 'Contribution Workflow',
                details: [
                    'Fork official repository',
                    'Create descriptive feature/bugfix branch',
                    'Implement changes following coding standards',
                    'Write comprehensive unit tests',
                    'Document code changes thoroughly',
                ],
            },
            {
                heading: 'Coding Standards',
                details: [
                    'Follow TypeScript/React best practices',
                    'Maintain consistent code formatting',
                    'Implement proper error handling',
                    'Optimize for performance',
                    'Adhere to SOLID principles',
                ],
            },
            {
                heading: 'Review Process',
                details: [
                    'Mandatory CI/CD checks',
                    'Peer code review required',
                    'Constructive feedback encouraged',
                    'Minimum two approvals for merge',
                    'Maintain clean, atomic commits',
                ],
            },
        ],
    },
    {
        title: 'Documentation',
        icon: <Book className="w-6 h-6 text-purple-500" />,
        description: 'Transform complex technical concepts into clear, accessible knowledge.',
        sections: [
            {
                heading: 'Documentation Strategy',
                details: [
                    'Identify documentation gaps',
                    'Use clear, concise technical writing',
                    'Create user and developer guides',
                    'Maintain consistent terminology',
                    'Include practical examples',
                ],
            },
            {
                heading: 'Style and Format',
                details: [
                    'Follow Markdown best practices',
                    'Use semantic HTML',
                    'Implement clear section hierarchies',
                    'Include code snippets',
                    'Ensure cross-referencing accuracy',
                ],
            },
            {
                heading: 'Collaborative Process',
                details: [
                    'Use pull requests for updates',
                    'Engage in technical editing',
                    'Validate technical accuracy',
                    'Encourage community feedback',
                    'Maintain version-controlled docs',
                ],
            },
        ],
    },
    {
        title: 'Community Engagement',
        icon: <Layers className="w-6 h-6 text-purple-500" />,
        description: 'Multiple ways to drive project innovation.',
        sections: [
            {
                heading: 'Technical Contributions',
                details: [
                    'Report detailed GitHub issues',
                    'Propose architectural improvements',
                    'Participate in RFC discussions',
                    'Optimize performance',
                    'Help triage bugs',
                ],
            },
            {
                heading: 'Non-Technical Support',
                details: [
                    'Provide UX feedback',
                    'Create tutorial content',
                    'Translate documentation',
                    'Assist in community support',
                    'Spread project awareness',
                ],
            },
            {
                heading: 'Knowledge Sharing',
                details: [
                    'Write technical blog posts',
                    'Create video tutorials',
                    'Speak at conferences',
                    'Mentor contributors',
                    'Build integrations',
                ],
            },
        ],
    },
];

// Frequently Asked Questions (FAQs) Section Data
const FAQs = [
    {
        question: 'How do I apply?',
        answer: 'Review open positions, prepare resume, submit through application portal.',
    },
    {
        question: 'Do you offer remote work?',
        answer: 'Yes, we support remote work for most positions.',
    },
    {
        question: 'What is the interview process?',
        answer: 'Screening, technical assessment, and team interview rounds.',
    },
];


export default function CareersContent() {
    const [activeSection, setActiveSection] = useState({});
    const cultureRef = useRef(null);
    const opportunitiesRef = useRef(null);
    const router = useRouter();

    const toggleSection = (sectionTitle, subsectionIndex) => {
        setActiveSection((prev) => ({
            ...prev,
            [`${sectionTitle}-${subsectionIndex}`]: !prev[`${sectionTitle}-${subsectionIndex}`],
        }));
    };

    const scrollToCulture = () => {
        cultureRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToOpportunities = () => {
        opportunitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="text-center py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-900 tracking-tight">
                        Join Our Innovative Technology Team
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Transform the future of AI-powered interactions with passionate technologists who are
                        committed to pushing the boundaries of innovation.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white group"
                            onClick={scrollToOpportunities}
                        >
                            Explore Opportunities <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-purple-500 text-purple-700 hover:bg-purple-50"
                            onClick={scrollToCulture}
                        >
                            Learn About Our Culture
                        </Button>
                    </div>
                </div>
            </section>

            <Separator className="my-12 bg-purple-100" />


            {/* New Culture Section */}
            <section
                ref={cultureRef}
                id="company-culture"
                className="py-16 bg-purple-50"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-purple-900 flex items-center justify-center">
                        <Users className="mr-3 text-purple-500" /> Our Company Culture
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        At our core, we believe in fostering an environment of innovation, collaboration,
                        and continuous learning. Our culture is built on three fundamental principles:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-6 text-center">
                                <Target className="mx-auto mb-4 w-12 h-12 text-purple-600" />
                                <h3 className="text-xl font-semibold mb-3 text-purple-800">Innovation</h3>
                                <p className="text-gray-600">
                                    We encourage creative thinking and empower our team to challenge
                                    the status quo, bringing groundbreaking ideas to life.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-6 text-center">
                                <Globe className="mx-auto mb-4 w-12 h-12 text-purple-600" />
                                <h3 className="text-xl font-semibold mb-3 text-purple-800">Inclusivity</h3>
                                <p className="text-gray-600">
                                    We celebrate diversity and create an inclusive environment where
                                    every team member can thrive and contribute uniquely.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-6 text-center">
                                <Book className="mx-auto mb-4 w-12 h-12 text-purple-600" />
                                <h3 className="text-xl font-semibold mb-3 text-purple-800">Growth</h3>
                                <p className="text-gray-600">
                                    We invest in continuous learning, providing opportunities for
                                    professional development and personal advancement.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


            {/* Career Opportunities */}
            <section ref={opportunitiesRef} className="py-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 flex items-center justify-center">
                    <Briefcase className="inline-block mr-3 text-purple-500" />
                    Current Opportunities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {CareerOpportunities.map((job, index) => (
                        <Card key={index} className="transition-shadow duration-300 ease-in-out hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl text-purple-800">{job.title}</CardTitle>
                                <p className="text-sm text-gray-500">{job.type}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-gray-700">{job.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full border-purple-500 text-purple-700 hover:bg-purple-50 transition-colors duration-200"
                                >
                                    Apply Now
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>


            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4 flex items-center justify-center">
                        <GitMerge className="mr-3 text-purple-500" /> Contribution Guidelines
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We believe in collaborative innovation. Our contribution guidelines ensure
                        high-quality, impactful work across all aspects of our project.
                    </p>
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                    <CardContent className="p-10">
                        <div className="grid md:grid-cols-3 gap-8">
                            {ContributionGuidelines.map((guideline, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center mb-4">
                                        {guideline.icon}
                                        <h3 className="text-xl font-semibold ml-2 text-purple-900">
                                            {guideline.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm min-h-[50px]">
                                        {guideline.description}
                                    </p>
                                    {guideline.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex} className="mb-3">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-between hover:bg-purple-50 group"
                                                onClick={() => toggleSection(guideline.title, sectionIndex)}
                                            >
                                                {section.heading}
                                                <ChevronDown
                                                    className={`transform transition-transform ${activeSection[`${guideline.title}-${sectionIndex}`]
                                                        ? 'rotate-180'
                                                        : ''
                                                        } group-hover:text-purple-700`}
                                                />
                                            </Button>
                                            {activeSection[`${guideline.title}-${sectionIndex}`] && (
                                                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                                    {section.details.map((detail, detailIndex) => (
                                                        <li
                                                            key={detailIndex}
                                                            className="pl-6 relative flex items-center"
                                                        >
                                                            <CheckCircle className="mr-2 w-4 h-4 text-purple-500" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4 flex items-center justify-center">
                        <HelpCircle className="mr-3 text-purple-500" /> Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about joining our team and the application process.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {FAQs.map((faq, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-300"
                        >
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold mb-3 text-purple-900 flex items-center">
                                    <HelpCircle className="mr-2 text-purple-500" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 rounded-lg shadow-xl">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        We're building the future of technology, and we want passionate, innovative
                        individuals like you to join our mission.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white text-purple-900 hover:bg-purple-50"
                            onClick={() => router.push('/contact')}
                        >
                            <Mail className="mr-2" /> Contact Hiring Team
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 bg-grey-200"
                            onClick={scrollToCulture}
                        >
                            <Users className="mr-2" /> Explore Team Culture
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}