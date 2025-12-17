import React from 'react';
import { SKILLS, EXPERIENCE } from '../constants';
import { Briefcase, User, Cpu, Sparkles } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  // Define categories in desired order
  const categoryOrder = [
    'Languages',
    'Frontend',
    'Backend & DB',
    'Cloud & Platforms',
    'AI/ML',
    'Tools'
  ];

  const renderIcon = (skill: Skill) => {
    if (skill.icon === 'custom-gemini') {
      return <Sparkles className="w-10 h-10 text-blue-500" />;
    }
    if (skill.icon === 'custom-huggingface') {
      return <span className="text-4xl leading-none">🤗</span>;
    }
    if (skill.icon?.startsWith('devicon-')) {
      // Use block/inline-block and ensure font-size is appropriate
      return <i className={`${skill.icon} text-4xl leading-none block transition-transform group-hover:scale-110`}></i>;
    }
    // Fallback
    return <Cpu className="w-10 h-10 text-slate-400" />;
  };

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl">
                <User className="text-indigo-600 dark:text-indigo-400" size={32} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
                <div className="w-20 h-1.5 bg-indigo-600 rounded-full mt-4"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Bio */}
              <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                <p className="mb-6">
                  Software Developer with strong foundations in Java, Kotlin, C#, and full-stack web development, now expanding expertise into <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Artificial Intelligence and Machine Learning</span>.
                </p>
                <p className="mb-6">
                  Completed comprehensive AI/ML certification series on Coursera (IBM, Google, Intel, DeepLearning.AI, Microsoft) covering Generative AI, LLMs, Responsible AI, Prompt Engineering, and cloud AI implementations.
                </p>
                <p>
                  Currently interning at <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Capaciti</span> with hands-on AI project exposure. Seeking roles that leverage both software engineering rigor and applied AI/ML to build intelligent, scalable solutions.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Briefcase className="text-indigo-500" /> Professional Experience
                </h3>
                <div className="space-y-8">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-900">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[7px] top-1.5"></div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">
                        {exp.company}{exp.location ? ` | ${exp.location}` : ''} | {exp.period}
                      </p>
                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row items-start gap-4 mb-16">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <Cpu className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
                <div className="w-20 h-1.5 bg-purple-600 rounded-full mt-4"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryOrder.map(category => {
                const skillsInCategory = SKILLS.filter(s => s.category === category);
                if (skillsInCategory.length === 0) return null;

                return (
                  <div key={category} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      {category}
                      <span className="text-xs font-normal text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                        {skillsInCategory.length}
                      </span>
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {skillsInCategory.map(skill => (
                        <div 
                          key={skill.name}
                          className="group flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md border border-slate-100 dark:border-slate-700/50 transition-all duration-300 cursor-default aspect-square"
                          title={skill.name}
                        >
                          <div className="mb-2 flex items-center justify-center h-12 w-12">
                            {renderIcon(skill)}
                          </div>
                          <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;