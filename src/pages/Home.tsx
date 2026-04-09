import { Link } from 'react-router-dom'
import { Book, BookOpen, Database, BarChart2, Server, Code } from 'lucide-react'

// 课程数据
const courses = [
  {
    id: 'python-basics',
    title: 'Python基础',
    description: 'Python编程语言的基础知识和应用',
    icon: <Code className="w-8 h-8" />
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    description: '数据处理和分析的核心技术',
    icon: <BarChart2 className="w-8 h-8" />
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    description: '网络数据采集和预处理技术',
    icon: <Book className="w-8 h-8" />
  },
  {
    id: 'supply-chain',
    title: '供应链数据分析',
    description: '供应链管理中的数据分析应用',
    icon: <Server className="w-8 h-8" />
  },
  {
    id: 'database',
    title: '数据库原理与应用',
    description: '数据库系统的基本原理和实际应用',
    icon: <Database className="w-8 h-8" />
  }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            李金勇的个人页面
          </Link>
        </div>
      </nav>

      {/* 个人信息区域 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">李金勇</h1>
          <p className="text-xl mb-6">广东科学技术职业学院 | 商学院 | 商务数据分析与应用专业</p>
          <p className="max-w-2xl mx-auto text-blue-100">
            专注于数据分析和商务智能领域的学习与实践，希望通过技术手段解决实际业务问题
          </p>
        </div>
      </section>

      {/* 课程列表区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center group"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600">{course.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mt-auto">
                  <span className="text-blue-600 font-medium flex items-center">
                    查看详情
                    <BookOpen className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
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