'use client';

"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Regras() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sections = [
    {
      title: 'Termos de Uso',
      rules: [
        '1. Ao entrar no servidor, você automaticamente concorda com todos os termos anexados e regras aqui descritas.',
        '2. Independentemente de quaisquer regras colocadas abaixo, a equipe operacional da Fusion Group se reserva o direito de orientar e/ou remover qualquer jogador da comunidade caso ele não se enquadre nos padrões estabelecidos.',
        '3. O desconhecimento das regras não será aceito como justificativa para descumpri-las, pois elas estão disponíveis para todos.'
      ]
    },
    {
      title: 'Regras Discord',
      rules: [
        '1. Ao abandonar o servidor do Discord, seu ID de usuário será banido do jogo sem aviso prévio. Caso retorne ao Discord, há a possibilidade de remoção do banimento em troca de advertência.',
        '2. É estritamente proibido divulgar fotos, vídeos ou qualquer tipo de imagem pessoal sem a devida autorização do titular, assim como utilizar linguagem ofensiva, racista, homofóbica ou ameaçadora.',
        '3. É proibido divulgar qualquer outro servidor nos canais do Discord.',
        '4. É proibido participar de chamadas/calls no Discord com outros jogadores que estão online no servidor. Fazer isso pode ser considerado metagaming.',
        '5. Evite enviar mensagens diretas (DM) aos membros da Staff por questões de pouca relevância. Sempre utilize os canais apropriados para enviar dúvidas, sugestões ou reportes.',
        '6. Utilize os canais destinados a bugs, dúvidas ou sugestões exclusivamente para os propósitos designados. O uso indevido ou fora do contexto estabelecido pode acarretar em sanções.',
        '7. Use menções (@) quando for realmente necessário. Evite incomodar outros jogadores de forma desnecessária e não utilize o @everyone ou @here.',
        '8. Durante ações importantes como roubo a bancos, joalherias ou outras atividades relevantes, todos os participantes devem estar nos canais designados ([👮] Polícia ou [🦹] Bandido). A ausência no canal pode acarretar advertências.',
        '9. É proibido utilizar materiais de terceiros ou clipes do canal "🎬│clips" como evidências em denúncias, exceto nos casos de suspeita de uso de citizens, programas ilegais ou similares.',
        '10. Negociar a exclusão de vídeos ou provas anexadas em denúncias em troca de vantagens no jogo ou fora dele resulta em banimento para ambas as partes negociantes.',
        '11. Jogadores que participarem de servidores que utilizam ou promovem programas ilegais serão punidos com advertências ou banimento.',
        '12. Ao jogar no servidor, você aceita receber mensagens automáticas dos nossos BOT\'s via privado.',
        '13. É proibido divulgar lives de outros servidores/cidades em nossos Discords.',
        '14. Respeite as decisões da Administração e mantenha uma conduta civilizada com outros membros no Discord.'
      ]
    },
    {
      title: 'Regras Gerais',
      rules: [
        '1. Restrição de Idade e Responsabilidade dos Pais: O servidor é destinado exclusivamente a maiores de 18 anos. Caso menores de idade desejem participar, devem obter autorização de seus pais ou responsáveis legais.',
        '2. Múltiplos IDs: Cada jogador pode ter apenas um ID registrado no servidor. Sanções serão aplicadas para violações.',
        '3. Atos Anti-RP: São proibidos atos como RDM, VDM, Power Gaming, Metagaming, Combat Logging, Anti RP, Anti amor à vida, Cop Baiting, DarkRP, Revenge Kill, cheating, e qualquer uso de exploits, bugs ou programas externos.',
        '4. Comportamento Tóxico: Nenhum comportamento tóxico será tolerado. Problemas externos ao RP não devem ser levados ao jogo e vice-versa.',
        '5. Transações com Dinheiro Real: Qualquer transação externa entre jogadores envolvendo dinheiro real para fins de venda, compra ou troca de veículos, itens, casas, vantagens ou prioridades dentro do jogo é estritamente proibida.',
        '6. Uso Indevido de Chats: O uso dos chats da polícia, hospital, ilegal, mecânica ou outros para provocações, Metagaming ou temas que fogem da finalidade é proibido.',
        '7. Representação Indevida: É estritamente proibido se passar por policiais, médicos, membros de facções ou organizações sem estar oficialmente setado, bem como fingir ser membro da Staff ou utilizar uniformes e itens exclusivos da mesma.',
        '8. Uso Indevido de Veículos de Serviço: Proibido assumir a direção de veículos da Polícia, SAMU, Mecânica, OAB ou Staff, mesmo destrancados, sem permissão.',
        '9. Desvio de Armas: É proibido desviar armas ou itens da polícia para si ou terceiros. Isso inclui armas, munições e materiais do "Arsenal", bem como itens apreendidos.',
        '10. Negociações Falsas: Golpes ou falsas negociações dentro do jogo são proibidos.',
        '11. Baú de Facção: Proibido retirar itens do baú da facção sem autorização do líder ou responsável.',
        '12. Memória do RP: Quando nocauteado ou morto, o jogador não deve se lembrar do evento ou pessoas envolvidas na morte.',
        '13. Reanimação pelo SAMU: Funcionários do SAMU estão proibidos de tentar reanimar uma pessoa desacordada mais de uma vez.',
        '14. Proteção a Trabalhadores Legais: É proibido roubar, furtar ou assaltar jogadores que estejam exercendo empregos temporários legais.',
        '15. Poluição Sonora: É proibido emitir sons em volume excessivo que caracterizem poluição sonora em locais públicos.',
        '16. Imersão no RP: É proibido sair da imersão utilizando expressões ou palavras que remetem a contextos externos ao Roleplay.',
        '17. Reinício do Servidor: Após o aviso de reinício do servidor (RR), é proibido iniciar qualquer tipo de ação.',
        '18. Fugas em Favelas: Durante perseguições policiais, assaltos ou sequestros, é estritamente proibido que fugitivos tentem se evadir em direção a favelas, sedes de organizações ou áreas de dominação.',
        '19. Metagaming: Todas as facções ou organizações flagradas realizando metagaming, seja por meio de Discord ou outras plataformas, estarão sujeitas a punições.',
        '20. Uso do Instagram: É estritamente proibido usar o Instagram do servidor para publicar conteúdo que comprometa a experiência de jogo ou viole as regras do Roleplay.',
        '21. Farm: Proibido roubar itens de farm.',
        '22. Favelas/QG: Em favelas ou QGs, o combate só pode ocorrer após uma interação clara e coerente dentro do contexto do Roleplay.',
        '23. Combat Logging: Se um jogador desconectar ou sair do jogo durante uma condução policial, seja no trajeto até a delegacia ou já dentro da cela, os policiais têm permissão para aplicar a pena máxima de 180 meses de prisão.',
        '24. Roubo e Furto de Veículos: É proibido roubar ou tomar posse de qualquer veículo durante um assalto, sendo permitido apenas roubar os itens do porta-malas.',
        '25. Compartilhamento de Contas: Proibido compartilhar contas com terceiros.',
        '26. Registros de Abates: é altamente recomendável que os jogadores gravem suas ações, especialmente abates, para uso como contra-prova em eventuais denuncias de hack.',
        '27. Clipes Manipulados: Clipes manipulados ou com qualidade de imagem insuficiente não serão aceitos como provas para denúncia ou revisão.',
      ]
    },
    // ... other sections ...
  ];

  const filteredSections = searchTerm
    ? sections.filter((section) =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.rules.some((rule) => rule.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : sections;

  return (
    <main className="min-h-screen pt-32 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Regras da Cidade</h1>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 text-black"
        />
        <p className="mb-8 text-center">Este documento oficial contém as diretrizes aplicáveis à comunidade e ao Servidor de GTA V Roleplay (FiveM): Complexo RJ. Revise este documento periodicamente para garantir sua eficácia e relevância. Última atualização: 14/04/2025.</p>
        {filteredSections.map((section, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {section.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
} 