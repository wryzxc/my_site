import { Link } from 'react-router-dom'
import { Book, BookOpen, Database, BarChart2, Server, Code, Mail, Github, Briefcase, GraduationCap, Award, ChevronRight, ExternalLink } from 'lucide-react'

// 课程数据
const courses = [
  {
    id: 'python-basics',
    title: 'Python基础',
    description: 'Python编程语言的基础知识和应用',
    icon: <Code className="w-8 h-8" />,
    intro: '学习Python编程语言的基本语法、数据类型、控制流、函数、模块等基础知识，掌握Python编程技能，为数据分析打下基础。',
    coreSkills: ['Python语法', '数据结构', '函数编程', '文件操作'],
    practice: '通过实际项目练习，编写小型数据处理脚本，解决简单的数据分析问题。'
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    description: '数据处理和分析的核心技术',
    icon: <BarChart2 className="w-8 h-8" />,
    intro: '学习数据清洗、数据可视化、统计分析等核心数据分析技术，掌握使用Python库进行数据分析的能力。',
    coreSkills: ['NumPy', 'Pandas', 'Matplotlib', '统计分析'],
    practice: '通过实际数据集，进行数据清洗、分析和可视化，生成分析报告。'
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    description: '网络数据采集和预处理技术',
    icon: <Book className="w-8 h-8" />,
    intro: '学习网络爬虫技术、数据采集工具使用、数据预处理方法，掌握从网络获取数据并进行处理的能力。',
    coreSkills: ['Requests', 'BeautifulSoup', 'Scrapy', '数据清洗'],
    practice: '编写网络爬虫，采集公开数据，并进行清洗和预处理。'
  },
  {
    id: 'supply-chain',
    title: '供应链数据分析',
    description: '供应链管理中的数据分析应用',
    icon: <Server className="w-8 h-8" />,
    intro: '学习供应链管理理论和数据分析方法，掌握供应链数据分析技能，为供应链优化提供数据支持。',
    coreSkills: ['需求预测', '库存优化', '物流分析', '供应链绩效评估'],
    practice: '分析供应链数据，识别优化机会，提出改进方案。'
  },
  {
    id: 'database',
    title: '数据库原理与应用',
    description: '数据库系统的基本原理和实际应用',
    icon: <Database className="w-8 h-8" />,
    intro: '学习数据库基本原理、SQL语言、数据库设计，掌握数据库操作和管理技能。',
    coreSkills: ['SQL', '数据库设计', '数据建模', '数据库优化'],
    practice: '设计数据库 schema，编写 SQL 查询，进行数据管理。'
  }
]

// 技能数据
const skills = [
  'Python', 'Excel', '数据可视化', 'SQL', '数据采集', '供应链分析', '统计分析', '数据清洗'
]

// 学习经历
const education = [
  {
    year: '2023 - 至今',
    title: '商务数据分析与应用专业',
    institution: '广东科学技术职业学院',
    description: '学习数据分析、数据库、供应链管理等相关课程，掌握数据分析核心技能。'
  }
]

// 实践经历
const experience = [
  {
    title: '数据分析项目',
    description: '使用Python和Pandas进行数据清洗和分析，生成可视化报告。',
    skills: ['Python', 'Pandas', 'Matplotlib']
  },
  {
    title: '供应链数据调研',
    description: '调研供应链数据，分析物流效率，提出优化建议。',
    skills: ['Excel', '供应链分析', '数据可视化']
  }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            李金勇的个人页面
          </Link>
        </div>
      </nav>

      {/* 个人信息区域 */}
      <section className="py-24 pt-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">李金勇</h1>
          <p className="text-xl mb-8">广东科学技术职业学院 | 商学院 | 商务数据分析与应用专业</p>
          <p className="max-w-3xl mx-auto text-blue-100 mb-12">
            专注于数据分析和商务智能领域的学习与实践，希望通过技术手段解决实际业务问题，成为一名优秀的数据分析师。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 个人简介模块 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">个人简介</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Briefcase className="mr-2 w-5 h-5" />
                专业方向
              </h3>
              <p className="text-gray-700">
                商务数据分析与应用，专注于数据采集、处理、分析和可视化，以及供应链数据分析。
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <GraduationCap className="mr-2 w-5 h-5" />
                学习目标
              </h3>
              <p className="text-gray-700">
                掌握数据分析核心技能，能够使用Python、SQL等工具进行数据处理和分析，为企业决策提供数据支持。
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Award className="mr-2 w-5 h-5" />
                技能特长
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  Python编程与数据分析
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  数据可视化与报表制作
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  SQL数据库操作
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  供应链数据分析
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Award className="mr-2 w-5 h-5" />
                个人优势
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  严谨的逻辑思维能力
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  较强的学习能力和适应能力
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  团队协作精神
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 w-4 h-4 text-blue-600" />
                  注重细节，工作认真负责
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表区域 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start text-left group hover:-translate-y-1"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600">{course.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mt-auto w-full">
                  <span className="text-blue-600 font-medium flex items-center group-hover:text-blue-800 transition-colors duration-300">
                    查看详情
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 学习经历和实践经历 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">学习与实践经历</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 学习经历 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700 flex items-center">
                <GraduationCap className="mr-2 w-6 h-6" />
                学习经历
              </h3>
              {education.map((item, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="text-sm text-blue-600 font-medium mb-1">{item.year}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <div className="text-gray-600 mb-2">{item.institution}</div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            {/* 实践经历 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700 flex items-center">
                <Briefcase className="mr-2 w-6 h-6" />
                实践经历
              </h3>
              {experience.map((item, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式模块 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">联系方式</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">邮箱</h3>
                  <p className="text-gray-600">2499963402@qq.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Github className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">GitHub</h3>
                  <a href="https://github.com/wryzxc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    github.com/wryzxc
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">个人项目展示</h3>
              <p className="text-gray-600 mb-4">
                后续将在此展示个人数据分析项目和学习成果，敬请期待。
              </p>
              <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500">项目展示区</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 李金勇的个人页面 | 广东科学技术职业学院</p>
        </div>
      </footer>
    </div>
  )
}

export default Home