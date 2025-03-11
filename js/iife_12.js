// ========== IIFE Immediately Invoked Function Expressions ===========

(function hello(){
    // Named IIFE
    console.log(`Database Connected.`);
})();

((name)=>{
    // Unnamed IIFE with variable.
    console.log(`Database Connected By Two ${name}.`);
})("Venu");

