// fullDisplay=()=>{
//     $(".overview").css("display","none");
// }
// handleCivil=()=>{
//     fullDisplay();
//     $("#civil").css("display","block");
// }
// handleComputer=()=>{
//     fullDisplay();
//     $("#computer").css("display","block");
// }
// handleElectriElectro=()=>{
//     fullDisplay();
//     $("#ElectriElectro").css("display","block");
// }
// handleElectriCommun=()=>{
//     fullDisplay();
//     $("#ElectriCommun").css("display","block");
// }
base=()=>{
    $(".department").css("display","none");
}
// document.getElementById("civil").style.display="block";
civ=()=>{
    base();
    document.getElementById("civil").style.display="block";
}
com=()=>{
    base();
    document.getElementById("computer").style.display="block";
}
eande=()=>{
    base();
    document.getElementById("ElectriElectro").style.display="block";
}
eandc=()=>{
    base();
    document.getElementById("ElectriCommun").style.display="block";
}
ip=()=>{
    base();
    document.getElementById("IndusProduc").style.display="block";
}
info=()=>{
    base();
    document.getElementById("Information").style.display="block";
}
mech=()=>{
    base();
    document.getElementById("Mechanical").style.display="block";
}
chem=()=>{
    base();
    document.getElementById("chemistry").style.display="block";
}
math=()=>{
    base();
    document.getElementById("maths").style.display="block";
}
phy=()=>{
    base();
    document.getElementById("physics").style.display="block";
}
const PACK=$("#placementHighlight .pack");
const cer=$("#placementHighlight .certified");
const ab=$("#placementHighlight .about");
pack=()=>{
    cer.css("display","none");
    ab.css("display","none");
    PACK.css("display","block");
}
certified=()=>{
    PACK.css("display","none");
    ab.css("display","none");
    cer.css("display","block");
}
about=()=>{
    cer.css("display","none");
    PACK.css("display","none");
    ab.css("display","block");
}
const hos=$(".hostel");
const aca=$(".academicRegulation");
const exa=$(".Examination");
const app=$(".application");
hostel=()=>{
    aca.css("display","none");
    exa.css("display","none");
    app.css("display","none");
    hos.css("display","block");
}
apply=()=>{
    aca.css("display","none");
    exa.css("display","none");
    hos.css("display","none");
    document.querySelector(".application").style.display="block";
}
acad=()=>{
    app.css("display","none");
    exa.css("display","none");
    hos.css("display","none");
    document.querySelector(".academicRegulation").style.display="block";
}