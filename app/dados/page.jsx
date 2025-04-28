import { Suspense } from 'react';

// Componente de carregamento
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
    </div>
  );
}

// Card estatístico
function StatCard({ title, value, change, icon }) {
  const isPositive = change >= 0;
  return (
    <div className="glass-effect p-6 rounded-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className={`text-sm mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-primary-600/20 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient">Dashboard</h1>
          <p className="text-gray-400 mt-2">Visualização de dados do Complexo do RJ</p>
        </div>

        {/* Grid de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total de Registros"
            value="1,234"
            change={5.8}
            icon={
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <StatCard
            title="Média Mensal"
            value="156"
            change={-2.3}
            icon={
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatCard
            title="Taxa de Crescimento"
            value="12.5%"
            change={3.2}
            icon={
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <StatCard
            title="Índice de Qualidade"
            value="8.9"
            change={1.5}
            icon={
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
        </div>

        {/* Seção principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gráfico principal */}
          <div className="lg:col-span-2 glass-effect p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-6">Evolução Temporal</h2>
            <Suspense fallback={<Loading />}>
              <div className="h-[400px] flex items-center justify-center text-gray-400">
                [Gráfico será implementado aqui]
              </div>
            </Suspense>
          </div>

          {/* Painel lateral */}
          <div className="glass-effect p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-6">Destaques</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium">Destaque {item}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Descrição breve do destaque {item} com informações relevantes.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela de dados */}
        <div className="mt-8 glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Dados Recentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-3 px-4">ID</th>
                  <th className="pb-3 px-4">Data</th>
                  <th className="pb-3 px-4">Categoria</th>
                  <th className="pb-3 px-4">Valor</th>
                  <th className="pb-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="py-3 px-4">#00{row}</td>
                    <td className="py-3 px-4">2024-03-{row.toString().padStart(2, '0')}</td>
                    <td className="py-3 px-4">Categoria {row}</td>
                    <td className="py-3 px-4">R$ {(Math.random() * 1000).toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">
                        Ativo
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 