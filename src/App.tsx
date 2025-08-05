import { Github, Mail, ExternalLink, Calendar, Code, User, Briefcase, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-gray-800">neotyaso</h1>
          <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
            大学1年生 🎓
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Projects</a>
          <a href="#timeline" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Journey</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium">Contact</a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* モバイルヘッダー */}
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold text-gray-800">neotyaso</h1>
              <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
                大学1年生 🎓
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200"
              aria-label="メニューを閉じる"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* ナビゲーションメニュー */}
          <nav className="flex-1 px-4 py-8 bg-white">
            <div className="space-y-6">
              <a
                href="#about"
                className="flex items-center space-x-4 text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 py-4 border-b border-gray-100"
                onClick={closeMenu}
              >
                <User className="w-6 h-6" />
                <span>About</span>
              </a>
              <a
                href="#projects"
                className="flex items-center space-x-4 text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 py-4 border-b border-gray-100"
                onClick={closeMenu}
              >
                <Code className="w-6 h-6" />
                <span>Projects</span>
              </a>
              <a
                href="#timeline"
                className="flex items-center space-x-4 text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 py-4 border-b border-gray-100"
                onClick={closeMenu}
              >
                <Calendar className="w-6 h-6" />
                <span>Journey</span>
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-4 text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 py-4 border-b border-gray-100"
                onClick={closeMenu}
              >
                <Mail className="w-6 h-6" />
                <span>Contact</span>
              </a>
            </div>
          </nav>

          {/* ソーシャルリンク */}
          <div className="px-4 py-6 border-t bg-white">
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/neotyaso" className="text-gray-600 hover:text-blue-500 transition-colors duration-200" aria-label="GitHub">
                <Github className="w-8 h-8" />
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200" aria-label="お問い合わせ">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* オーバーレイ */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/10 backdrop-blur-none z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

// ヒーローセクション
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 背景のアニメーション */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          neotyaso
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">大学1年生 • Web Developer</p>
        <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          React & TypeScript で美しいWebサイトを作る、未来のフルスタックエンジニア
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            プロジェクトを見る
          </a>
          <a href="#contact" className="block border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-200">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};

// アバウトセクション
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg">
            神奈川県出身の大学1年生です。将来は自分のサービスを立ち上げることを目指しており、起業に興味があります。
            現在はPHPとLaravelを中心にバックエンドの学習を進めつつ、ReactやTypeScriptなどのフロントエンド技術にも取り組んでいます。
            将来的にはフルスタックエンジニアとして幅広く開発に携わりたいと考えています。</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">なぜWeb開発を始めたのか</h3>
            <p className="text-gray-600 leading-relaxed">
              大学入試が終わった2025年2月に、将来役立つ実用的なスキルを身につけたいと思い、独学でプログラミングを始めました。
              最初はHTML/CSSから学び、徐々にJavaScriptやReact、TypeScriptへと範囲を広げています。
              現在は実務レベルを目指して、自分なりの作品制作に取り組んでいます。
            </p>
            <p className="text-gray-600 leading-relaxed">
              特に美しいUI/UXと最新技術への関心が強く、ユーザーに使いやすく見た目も魅力的なWebサイトづくりを大切にしています。
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="w-8 h-8 text-blue-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">技術力</h4>
              <p className="text-sm text-gray-600">React, TypeScript,等のモダンな技術スタック</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <User className="w-8 h-8 text-purple-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">デザインセンス</h4>
              <p className="text-sm text-gray-600">美しいUI/UXを重視した制作スタイル</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">学習能力</h4>
              <p className="text-sm text-gray-600">完全独学で制作中、実務レベルを目指して成長中</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="w-8 h-8 text-orange-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">実務志向</h4>
              <p className="text-sm text-gray-600">インターンを通じて実際の開発現場を経験したい</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// プロジェクトセクション
const Projects = () => {
  const projects = [
    {
      title: "Kyoka Suigetsu Castle",
      description: "React + TypeScript で制作した和風デザインのWebサイト。レスポンシブデザインと美しいアニメーションが特徴。",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://via.placeholder.com/600x400/3B82F6/ffffff?text=Kyoka+Suigetsu+Castle",
      github: "https://github.com/neotyaso/kyoka-suigetsu-castle",
      live: "https://kyoka-suigetsu-castle.vercel.app",
      status: "完成"
    },
    {
      title: "ポートフォリオサイト",
      description: "現在制作中のポートフォリオサイト。モダンなUIライブラリを活用し、効率的な開発を実践。",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400/10B981/ffffff?text=Portfolio+Site",
      github: "#",
      live: "#",
      status: "制作中"
    },
    {
      title: "Laravel統合プロジェクト（予定）",
      description: "既存のフロントエンドにLaravelでバックエンドAPI を構築し、フルスタック開発を実現予定。",
      tech: ["Laravel", "PHP", "MySQL", "API開発"],
      image: "https://via.placeholder.com/600x400/EF4444/ffffff?text=Laravel+Project",
      github: "#",
      live: "#",
      status: "計画中"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 text-lg">これまでに制作した作品と今後の予定</p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === '完成' ? 'bg-green-100 text-green-800' :
                      project.status === '制作中' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 人生タイムライン
const Timeline = () => {
  const events = [
    {
      date: "2025年2月",
      title: "HTML/CSS学習開始",
      description: "Web開発の基礎となるHTML/CSSから学習をスタート。",
      type: "learning"
    },
    {
      date: "2025年4月",
      title: "大学入学",
      description: "大学に入学。将来を見据えてプログラミング学習を決意。",
      type: "education"
    },
    {
      date: "2025年4月",
      title: "JavaScript習得",
      description: "動的なWebサイト制作のためJavaScriptを本格的に学習。",
      type: "learning"
    },
    {
      date: "2025年6月",
      title: "React/TypeScript習得",
      description: "モダンフロントエンド開発のためReactとTypeScriptを習得。",
      type: "learning"
    },
    {
      date: "2025年8月",
      title: "初作品完成",
      description: "Kyoka Suigetsu Castle を制作・公開。実務レベルの技術力を証明。",
      type: "achievement"
    },
    {
      date: "2025年8月",
      title: "ポートフォリオ制作",
      description: "インターン応募に向けてポートフォリオサイトを制作中。",
      type: "current"
    },
    {
      date: "2025年8月",
      title: "Laravel習得予定",
      description: "フルスタック開発のためLaravel（PHP）の学習を計画",
      type: "future"
    },
    {
      date: "2025年夏",
      title: "インターン参加予定",
      description: "実務経験を積むためのインターンシップ参加を目指す。",
      type: "future"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
          <p className="text-gray-600 text-lg">プログラミング学習から現在まで、そして未来への道のり</p>
        </div>
        
        <div className="relative">
          {/* タイムラインの線 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
          
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* アイコン */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                event.type === 'education' ? 'bg-purple-500' :
                event.type === 'learning' ? 'bg-blue-500' :
                event.type === 'achievement' ? 'bg-green-500' :
                event.type === 'current' ? 'bg-orange-500' :
                'bg-gray-400'
              }`}>
                {event.type === 'education' && <GraduationCap className="w-8 h-8 text-white" />}
                {event.type === 'learning' && <Code className="w-8 h-8 text-white" />}
                {event.type === 'achievement' && <Briefcase className="w-8 h-8 text-white" />}
                {event.type === 'current' && <Calendar className="w-8 h-8 text-white" />}
                {event.type === 'future' && <Calendar className="w-8 h-8 text-white" />}
              </div>
              
              {/* コンテンツ */}
              <div className="ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-blue-600">{event.date}</span>
                  {event.type === 'current' && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                      進行中
                    </span>
                  )}
                  {event.type === 'future' && (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      予定
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// お問い合わせセクション
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300 text-lg">インターンシップやプロジェクトのご相談はお気軽にご連絡ください</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 連絡先情報 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">お気軽にご連絡ください</h3>
              <p className="text-gray-300 mb-6">
                現在、実務経験を積むためのインターンシップを積極的に探しています。
                Web開発に関するプロジェクトや学習について、ぜひお話しさせてください。
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="font-semibold">Contact</p>
                  <p className="text-gray-300">下記のフォームからお気軽にご連絡ください</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/neotyaso" className="text-blue-400 hover:text-blue-300 transition-colors">
                    https://github.com/neotyaso
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-semibold mb-3">現在のスキルレベル</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React/TypeScript</span>
                  <span className="text-blue-400">中級</span>
                </div>
                <div className="flex justify-between">
                  <span>HTML/CSS</span>
                  <span className="text-green-400">上級</span>
                </div>
                <div className="flex justify-between">
                  <span>JavaScript</span>
                  <span className="text-green-400">上級</span>
                </div>
                <div className="flex justify-between">
                  <span>PHP/Laravel</span>
                  <span className="text-yellow-400">学習予定</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* コンタクトフォーム */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">メッセージを送る</h3>
            <form className="space-y-6" method="POST" action="/contact.php">
              <div>
                <label className="block text-sm font-medium mb-2">お名前 *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">件名 *</label>
                <select 
                  name="subject"
                  required
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="internship">インターンシップについて</option>
                  <option value="project">プロジェクトのご相談</option>
                  <option value="collaboration">お仕事のご依頼</option>
                  <option value="other">その他</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">メッセージ *</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  placeholder="ご質問やご相談内容をお聞かせください..."
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors resize-vertical"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
              >
                送信する
              </button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4 text-center">
              通常24時間以内にご返信いたします
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// メインアプリ
export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}