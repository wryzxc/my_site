import { useParams, Link } from 'react-router-dom'
import { BookOpen, ArrowLeft } from 'lucide-react'

// 课程数据
const courses = [
  {
    id: 'python-basics',
    title: 'Python基础',
    description: 'Python编程语言的基础知识和应用',
    content: [
      'Python语言简介',
      '基本数据类型和变量',
      '控制流和循环',
      '函数和模块',
      '文件操作',
      '异常处理',
      '面向对象编程基础'
    ],
    projects: []
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    description: '数据处理和分析的核心技术',
    content: [
      '数据分析概述',
      'NumPy库的使用',
      'Pandas库的使用',
      '数据可视化技术',
      '统计分析基础',
      '机器学习入门'
    ],
    projects: []
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    description: '网络数据采集和预处理技术',
    content: [
      '数据采集概述',
      'Requests库的使用',
      'BeautifulSoup库的使用',
      'Scrapy框架入门',
      '数据清洗技术',
      '数据预处理方法'
    ],
    projects: []
  },
  {
    id: 'supply-chain',
    title: '供应链数据分析',
    description: '供应链管理中的数据分析应用',
    content: [
      '供应链管理概述',
      '供应链数据采集',
      '需求预测模型',
      '库存优化分析',
      '物流路径优化',
      '供应链绩效评估'
    ],
    projects: []
  },
  {
    id: 'database',
    title: '数据库原理与应用',
    description: '数据库系统的基本原理和实际应用',
    content: [
      '数据库系统概述',
      '关系型数据库基础',
      'SQL语言基础',
      '数据库设计原理',
      '索引和优化',
      'NoSQL数据库简介'
    ],
    projects: []
  }
]

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>()
  const course = courses.find(c => c.id === id)

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <Link to="/" className="text-xl font-bold text-blue-600">
              李金勇的个人页面
            </Link>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">课程不存在</h1>
          <Link to="/" className="text-blue-600 font-medium flex items-center justify-center">
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            李金勇的个人页面
          </Link>
        </div>
      </nav>

      {/* 课程详情 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-blue-600 font-medium flex items-center mr-4">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回首页
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <p className="text-gray-600 mb-8">{course.description}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <BookOpen className="mr-2 w-5 h-5 text-blue-600" />
                学习内容
              </h2>
              <ul className="space-y-2">
                {course.content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">学习成果</h2>
              {course.projects.length > 0 ? (
                <ul className="space-y-4">
                  {course.projects.map((project, index) => (
                    <li key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h3 className="font-medium text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mt-1">{project.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">暂无学习成果，后续会补充</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 李金勇的个人页面 | 广东科学技术职业学院</p>
        </div>
      </footer>
    </div>
  )
}

export default CourseDetail