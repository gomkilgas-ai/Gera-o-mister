(() => {
  const slug = value => value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const league = (id, name, tier, rows) => ({
    id,
    name,
    country: 'Portugal',
    tier,
    teams: rows.map(([teamName, str]) => ({
      id: `${id}-${slug(teamName)}`,
      name: teamName,
      str,
      league: id,
      country: 'Portugal',
      players: []
    }))
  });

  window.GENERATION_MISTER_PORTUGAL_PYRAMID = [
    league('por2', 'Liga Portugal 2', 1, [
      ['Académica de Coimbra', 58], ['CD Feirense', 57], ['FC Penafiel', 57], ['FC Paços de Ferreira', 57],
      ['GD Chaves', 57], ['Leixões SC', 56], ['SCU Torreense', 56], ['UD Leiria', 56],
      ['SL Benfica B', 56], ['FC Porto B', 56], ['Sporting CP B', 56], ['CD Tondela', 56],
      ['FC Vizela', 55], ['CD Mafra', 55], ['FC Felgueiras', 55], ['UD Oliveirense', 54],
      ['Portimonense SC', 54], ['SC Covilhã', 53]
    ]),
    league('por3', 'Liga 3', 2, [
      ['CF Os Belenenses', 53], ['Académica OAF', 52], ['Atlético CP', 52], ['Caldas SC', 51],
      ['Varzim SC', 51], ['AD Fafe', 51], ['Amarante FC', 50], ['SC Braga B', 50],
      ['Vitória SC B', 50], ['AD Sanjoanense', 49], ['SC São João de Ver', 49], ['CD Trofense', 49],
      ['Canelas 2010', 48], ['Anadia FC', 48], ['União de Santarém', 48], ['SU 1.º Dezembro', 47],
      ['SC Vianense', 47], ['AD Marco 09', 47], ['GD Chaves B', 46], ['FC Alverca B', 46]
    ]),
    league('por4', 'Campeonato de Portugal', 3, [
      ['SC Beira-Mar', 46], ['Sertanense FC', 46], ['FC Alpendorada', 45], ['CD Gouveia', 45],
      ['GD Fontinhas', 45], ['FC Cesarense', 44], ['SC Vila Real', 44], ['FC Tirsense', 44],
      ['GD Bragança', 43], ['AD Camacha', 43], ['CD Ribeira Brava', 43], ['FC Barreirense', 42],
      ['Louletano DC', 42], ['FC Castrense', 42], ['Imortal DC', 41], ['CF Esperança de Lagos', 41],
      ['GD Vilar de Perdizes', 41], ['União de Lamas', 40], ['GD Gafanha', 40], ['SC Ideal', 40],
      ['CRP Delães', 39], ['Oliveira do Hospital', 39], ['SC Salgueiros', 39], ['Vianense B', 38]
    ]),
    league('viseu-honra', 'AF Viseu — Divisão de Honra', 4, [
      ['SC Penalva do Castelo', 43], ['Carvalhais FC', 43], ['GD Oliveira de Frades', 42],
      ['Carregal do Sal', 42], ['GD Campia', 41], ['CDR Moimenta da Beira', 41],
      ['GD Resende', 41], ['CA Molelos', 40], ['ACDR Lamelas', 40], ['AD Sátão', 40],
      ['UD Sampedrense', 39], ['SC Lamego', 39], ['Vale de Açores', 39],
      ['GD Mangualde', 38], ['SL Nelas', 38], ['Nespereira FC', 37]
    ]),
    league('viseu-1div', 'AF Viseu — 1.ª Divisão', 5, [
      ['CR Ferreira de Aves', 38], ['Lusitano Vildemoinhos', 38], ['AD Piães', 37],
      ['GD Parada', 37], ['GD Vila Chã de Sá', 36], ['Tarouquense', 36],
      ['GDCP Oliveira do Douro', 35], ['Paivense', 35], ['Sezurense', 34],
      ['GD Santacombadense', 34], ['AC Travanca', 33], ['SC Santar', 33]
    ])
  ];
})();
