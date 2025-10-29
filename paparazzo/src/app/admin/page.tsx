'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  content: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [posts, setPosts] = useState<{ slug: string; title: string }[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Controlla se è già autenticato (localStorage)
  useEffect(() => {
    const authToken = localStorage.getItem('admin-auth');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  // Carica la lista dei post solo se autenticato
  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/admin/posts', {
        headers: {
          'Authorization': 'Bearer paparazzo2025!'
        }
      })
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(console.error);
    }
  }, [isAuthenticated]);

  // Gestisce il login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Password semplice - in produzione usa qualcosa di più sicuro
    if (password === 'paparazzo2025!') {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'authenticated');
      setLoginError('');
    } else {
      setLoginError('Password non corretta');
      setPassword('');
    }
  };

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
    setSelectedPost(null);
    setPosts([]);
  };

  // Carica un post specifico
  const loadPost = async (slug: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/posts/${slug}`, {
        headers: {
          'Authorization': 'Bearer paparazzo2025!'
        }
      });
      const post = await response.json();
      setSelectedPost(post);
    } catch (error) {
      console.error('Errore nel caricamento del post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Salva le modifiche
  const savePost = async () => {
    if (!selectedPost) return;
    
    setSaveStatus('saving');
    try {
      const response = await fetch(`/api/admin/posts/${selectedPost.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer paparazzo2025!'
        },
        body: JSON.stringify(selectedPost),
      });

      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error('Errore nel salvataggio:', error);
      setSaveStatus('error');
    }
  };

  // Aggiorna i campi del post
  const updateField = (field: keyof BlogPost, value: string) => {
    if (!selectedPost) return;
    setSelectedPost({ ...selectedPost, [field]: value });
  };

  // Se non è autenticato, mostra il form di login
  if (!isAuthenticated) {
    return (
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Amministrazione Blog</h1>
                <p className="text-gray-600">Inserisci la password per accedere</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Inserisci la password"
                    required
                  />
                </div>
                
                {loginError && (
                  <div className="text-red-600 text-sm text-center">{loginError}</div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-white py-2 px-4 rounded-lg hover:bg-gold-600 transition-colors font-medium"
                >
                  Accedi
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Area riservata agli amministratori
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section background="gray" padding="xl">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Amministrazione Blog</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Lista articoli */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Articoli</h2>
                  <button
                    onClick={() => {
                      const title = prompt('Titolo del nuovo articolo:');
                      if (title) {
                        const slug = title.toLowerCase()
                          .replace(/[^a-z0-9 -]/g, '')
                          .replace(/\s+/g, '-')
                          .replace(/-+/g, '-')
                          .trim();
                        
                        const newPost = {
                          title,
                          slug,
                          excerpt: 'Nuovo articolo in fase di scrittura...',
                          date: new Date().toISOString(),
                          category: 'Blog',
                          metaTitle: title,
                          metaDescription: '',
                          keywords: '',
                          content: `# ${title}\n\nScrivi qui il contenuto del tuo articolo...`
                        };
                        setSelectedPost(newPost);
                      }
                    }}
                    className="px-3 py-1 text-xs bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
                  >
                    + Nuovo
                  </button>
                </div>
                <div className="space-y-2">
                  {posts.map((post) => (
                    <button
                      key={post.slug}
                      onClick={() => loadPost(post.slug)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedPost?.slug === post.slug
                          ? 'bg-gold-100 text-gold-800'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="font-medium text-sm">{post.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{post.slug}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="text-gray-500">Caricamento...</div>
                </div>
              ) : selectedPost ? (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Modifica Articolo
                    </h2>
                    <button
                      onClick={savePost}
                      disabled={saveStatus === 'saving'}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        saveStatus === 'saving'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : saveStatus === 'saved'
                          ? 'bg-green-500 text-white'
                          : saveStatus === 'error'
                          ? 'bg-red-500 text-white'
                          : 'bg-gold-500 text-white hover:bg-gold-600'
                      }`}
                    >
                      {saveStatus === 'saving'
                        ? 'Salvando...'
                        : saveStatus === 'saved'
                        ? 'Salvato!'
                        : saveStatus === 'error'
                        ? 'Errore'
                        : 'Salva'}
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Metadati */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titolo
                        </label>
                        <input
                          type="text"
                          value={selectedPost.title}
                          onChange={(e) => updateField('title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Categoria
                        </label>
                        <input
                          type="text"
                          value={selectedPost.category}
                          onChange={(e) => updateField('category', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descrizione breve
                      </label>
                      <textarea
                        value={selectedPost.excerpt}
                        onChange={(e) => updateField('excerpt', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description (SEO)
                      </label>
                      <textarea
                        value={selectedPost.metaDescription}
                        onChange={(e) => updateField('metaDescription', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Keywords (separate da virgola)
                      </label>
                      <input
                        type="text"
                        value={selectedPost.keywords}
                        onChange={(e) => updateField('keywords', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>

                    {/* Contenuto */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contenuto (Markdown)
                      </label>
                      <textarea
                        value={selectedPost.content}
                        onChange={(e) => updateField('content', e.target.value)}
                        rows={20}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-mono text-sm"
                        placeholder="Scrivi il contenuto dell'articolo in Markdown..."
                      />
                    </div>

                    {/* Anteprima */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anteprima
                      </label>
                      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                        <div className="prose prose-sm max-w-none">
                          {selectedPost.content.split('\n').map((line, index) => {
                            if (line.startsWith('# ')) {
                              return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.slice(2)}</h1>;
                            } else if (line.startsWith('## ')) {
                              return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.slice(3)}</h2>;
                            } else if (line.startsWith('### ')) {
                              return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.slice(4)}</h3>;
                            } else if (line.trim() === '') {
                              return <br key={index} />;
                            } else {
                              return <p key={index} className="mb-3">{line}</p>;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="text-gray-500">Seleziona un articolo da modificare</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}