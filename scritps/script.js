/*
    1 - aguardar um número
    2 - pedir um operação - salvo primeiro número
    3 - pedir um segundo número
    4 - calcular resultado
 */
    let n1 = null
    let operation = null
    let n2 = null

    let result = null


function inputNumberOnScreen(n)
{
    // colocar o número na tela

    let screenN1 = document.querySelector("div.screenN1")
    let screenN2 = document.querySelector("div.screenN2")

    if (operation === null)
    { 
        screenN1.textContent += n
        screenN1.textContent = Number.parseFloat(screenN1.textContent)

    }
    else
    {
        screenN2.textContent += n
        screenN2.textContent = Number.parseFloat(screenN2.textContent)
    }

    
}

function inputOperation(op) 
{
    let screenN1 = document.querySelector("div.screenN1")
    let screenN2 = document.querySelector("div.screenN2")
    let screenOp = document.querySelector("div.screenOp")
    

    if(n1 === null && screenN1.textContent !== '')
    {
        n1 = Number.parseFloat(screenN1.textContent)
        operation = op
        screenOp.textContent = op
    }

    if (screenN2.textContent)
    {
        toCalculate()
    }
}
{}

function toCalculate()
{

    let screenN1 = document.querySelector("div.screenN1")
    let screenN2 = document.querySelector("div.screenN2")

    if(n1 !== null && operation !== null && screenN2.textContent !== '')
    {
        n2 = Number.parseFloat(screenN2.textContent)
        switch (operation) {
            case "+":
                result = n1 + n2
                break

            case "-":
                result = n1 - n2
                break

            case "/":
                result = n1 / n2
                if (n2 === 0)
                {
                    result = ""
                    window.alert("Não é possível dividir por zero")
                }

                break
            case "*":
                result = n1 * n2
                break

            default:
                break;
        }
        
        
        clear()
        // mostra resultado em tela
        
        
        screenN1.textContent = result
    
        result = null
    }


    
}


function debug()
{
    console.log(" n1: ",n1, "\n n2 : ", n2, "\n op: ", operation)
}


function clear()
{

    let screenN1 = document.querySelector("div.screenN1")
    let screenN2 = document.querySelector("div.screenN2")
    let screenOp = document.querySelector("div.screenOp")

    screenN1.textContent = ''
    screenN2.textContent = ''
    screenOp.textContent = ''

    n1 = null
    operation = null
    n2 = null
}

function clearBtn()
{
    clear()
    result = null
}










