//Script verificação de cep

var cep = '00000000';
var estado = 'rs';
var cidade = 'porto alegre';
var rua = 'ipiranga';
if(cep.length == 8){
    $.get(
        'https://viacep.com.br/ws/' + cep + '/json/',
        function(response){
            if(response.hasOwnProperty( 'erro' )){
                console.info('cep inválido');
                $.get(
                    'https://viacep.com.br/ws/' + estado + '/' + cidade + '/' + rua + '/json/',
                    function(response){
						var x = 0;
						while(x < response.length){
							console.log(response[x].cep + '\nLogradouro: ' + response[x].logradouro + '\nBairro: ' + response[x].bairro + '\nLocalidade: ' + response[x].localidade  + '\nEstado: ' + response[x].uf  + '\nCodigo IBGE: ' + response[x].ibge + '\n\n' );
							x++;
						}
                    }
                )
            }else{
                console.log('Cep correto');
            }
        }

    )
}
