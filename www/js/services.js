angular.module('starter.services', [])

  .factory('Links', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var links = [{
      id: 0,
      name: 'Agência Mural | Agência Mural agradece as doações na campanha de financiamento coletivo - Agênc',
      Description: 'Agência Mural agradece as doações na campanha de financiamento coletivo',
      URL: 'https://agenciamural.com.br/release/agencia-mural-agradece-as-doacoes-na-campanha-de-financiamento-coletivo/ ',
      Safe_Browsing: true,
      img:'http://agenciamural.com.br/wp-content/uploads/2015/11/agencia_mural_05_v3_horizontal1.png'

    }, {
      id: 1,
      name: 'Ask Ubuntu',
      Description: 'Easiest way to copy ssh keys to another machine?',
      URL: 'https://askubuntu.com/questions/4830/easiest-way-to-copy-ssh-keys-to-another-machine',
      Safe_Browsing: true,
      img:'https://pbs.twimg.com/profile_images/1209490090/apple-touch-icon_400x400.png'
    }, {
      id: 2,
      name: 'Palmeiras Arquibancada',
      Description: 'Hoje entraremos jogando dentro de CASA ...',
      URL: 'https://www.facebook.com/arquibancadadopalmeiras/?hc_ref=ARRzjmkvPN3v3-YBtO3EnJ94C4mjoZIxD0vueqNRkjDzVEk-VjLRzD3zIsSv_J7IMqY&fref=nf ',
      Safe_Browsing: false,
      img:'http://4.bp.blogspot.com/-zMXgvWnVt0o/WqVdUeQTSCI/AAAAAAAAElo/Dj7_yCNiCSkl1Yy7BLdehzjgU8eJViNPwCK4BGAYYCw/s1600/gols-do-palmeiras-e-melhores-momentos.png'
    }, {
      id: 3,
      name: 'Nao existe',
      Description: '',
      URL: 'https://onoticioso.com/jovem-gasta-mais-de-r-150-mil-para-se-transformar-em-alienigena-e-resultado-e-bizarro-veja-fotos/',
      Safe_Browsing: false,
      img:''
    }, {
      id: 4,
      name: 'Lula responde a seis ações penais e é alvo de duas denúncias',
      Description: 'Condenado no caso do triplex em Guarujá (SP) ...',
      URL: 'https://www.terra.com.br/noticias/brasil/politica/lava-jato/lula-responde-a-seis-acoes-penais-e-e-alvo-de-duas-denuncias,a4fa0f0f96cf5541955e7e0e9df14709kl2gdwgi.html',
      Safe_Browsing: true,
      img:'https://vagasabertas.org/wp-content/uploads/2013/04/trabalhe-portal-terra.jpg'
    }];

    return {
      all: function () {
        return links;
      },
      remove: function (link) {
        links.splice(links.indexOf(link), 1);
      },
      get: function (linkId) {
        for (var i = 0; i < links.length; i++) {
          if (links[i].id === parseInt(linkId)) {
            return links[i];
          }
        }
        return null;
      }
    };
  })
  .factory('Dicas', function () {
    // Might use a resource here that returns a JSON array
    

    // Some fake testing data
    var dicas = [{
      id: 0,
      name: 'Não tem fonte de informação? Não repasse!',
      icon: 'ion-ios-close'
    }, {
      id: 1,
      name: 'Busque o site original!',
      icon: 'ion-checkmark-round'
    }, {
      id: 2,
      name: 'Não sabe quem publicou? Se liga no histórico!',
      icon: 'ion-log-out'
    }, {
      id: 3,
      name: 'Confira a data de publicação!',
      icon: 'ion-clock'

    }, {
      id: 4,
      name: 'Muitos adjetivos, elogios daóra na matéria ? Desconfie!',
      icon: 'ion-eye-disabled'
    },
     {
      id: 5,
      name: 'Pesquise outro veículo de informação',
      icon: 'ion-information-circled'
    }, {
      id: 6,
      name: ' Não se limita ao títulos! Leia a notícia inteira!',
      icon: 'ion-grid'
    }, {
      id: 7,
      name: 'Putz, tá na dúvida? Não compartilhe!',
      icon: 'ion-close-circled'
    }];

    return {
      all: function () {
        return dicas;
      },
      remove: function (dica) {
        dicas.splice(dicas.indexOf(dica), 1);
      },
      get: function (dicaId) {
        for (var i = 0; i < dicas.length; i++) {
          if (dicas[i].id === parseInt(dicaId)) {
            return dicas[i];
          }
        }
        return null;
      }
    };
  });
;
