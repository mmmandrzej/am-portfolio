import { GitBranch, Code2, CheckCircle2 } from "lucide-react";

export default function AboutMe() {
  return (
        <section id="about" className="w-full py-20 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full mb-6" />
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                I focus on building <span className="text-emerald-600 dark:text-emerald-400 font-medium">reliable</span> applications, frameworks, pipelines, scripts.
              </p>
            </div>
    
            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1: CI/CD */}
              <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GitBranch className="w-24 h-24 text-emerald-600" />
                </div>
    
                <div className="relative">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-6">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    DevOps & CI/CD
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    I design and implement end-to-end CI/CD pipelines from scratch, focusing on
                    <span className="text-gray-900 dark:text-gray-200 font-medium"> reliability, fast feedback, and predictable deployments</span>. 
                    My goal is to remove manual steps and
                    make delivery simple and repeatable.
                  </p>
    
                  <ul className="space-y-3">
                    {[
                      "Jenkins & GitLab CI Custom Pipelines",
                      "Dockerized build & release workflows",
                      "Quality gates: tests, linting, security checks"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
    
              {/* Card 2: Backend */}
              <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 className="w-24 h-24 text-emerald-600" />
                </div>
    
                <div className="relative">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-6">
                    <Code2 className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Backend Services
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Building production-ready backend services using <span className="text-gray-900 dark:text-gray-200 font-medium">Go, Kotlin, Java and Python</span>.
                    My focus is on clean architecture, type-safe API contracts, and high observability.
                  </p>
    
                  <ul className="space-y-3">
                    {[
                      "Go services with Oapi Codegen Generator",
                      "Kotlin Spring Boot with OpenAPI Generator",
                      "Python services",
                      "Containerized Microservices & Monitoring"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
