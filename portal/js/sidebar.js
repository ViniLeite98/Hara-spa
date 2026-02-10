const sidebar = document.getElementById('sidebar');

sidebar.innerHTML = `
  <nav>
    <ul>
      <li data-page="inicio">🏠 Início</li>

      <li class="group">
        👥 Gestão de Equipe
        <ul>
          <li data-page="equipe/gestao">Gestão</li>
        </ul>
      </li>

      <li class="group">
        📄 Solicitações
        <ul>
          <li data-page="solicitacoes/lista">Lista</li>
          <li data-page="solicitacoes/nova">Nova</li>
        </ul>
      </li>

      <li data-page="escala/index">📅 Escala</li>
      <li data-page="materiais/index">📦 Materiais</li>
    </ul>
  </nav>
`;

