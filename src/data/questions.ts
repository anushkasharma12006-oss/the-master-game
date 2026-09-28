export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";
export type GameMode = "master" | "rapid" | "brain" | "science";

export interface Question {
  id: string;
  mode: GameMode;
  category: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  hint: string;
  coinReward: number;
}

const q = (id: string, mode: GameMode, category: string, difficulty: Difficulty, question: string, options: string[], answer: number, explanation: string, hint: string, coinReward: number): Question => ({ id, mode, category, difficulty, question, options, answer, explanation, hint, coinReward });

export const questions: Question[] = [
  q("m1","master","Geography","Easy","Which continent is Egypt part of?",["Asia","Africa","Europe","South America"],1,"Egypt is located in northeastern Africa.","Think of the Nile's main continent.",100),
  q("m2","master","Nature","Easy","What is the largest mammal on Earth?",["African elephant","Blue whale","Giraffe","Orca"],1,"The blue whale is the largest known animal.","It lives in the ocean.",100),
  q("m3","master","History","Easy","The pyramids of Giza were built in which ancient civilization?",["Roman","Maya","Egyptian","Greek"],2,"The Giza pyramids are monuments of ancient Egypt.","They stand beside the Nile.",100),
  q("m4","master","Literature","Easy","Who wrote Romeo and Juliet?",["Charles Dickens","William Shakespeare","Jane Austen","Homer"],1,"Shakespeare wrote the tragedy around 1595.","The playwright was known as the Bard.",100),
  q("m5","master","Geography","Medium","Which country has the most natural lakes?",["Finland","Canada","Russia","Brazil"],1,"Canada has more lakes than any other country.","Look to North America.",250),
  q("m6","master","History","Medium","In which year did the Berlin Wall fall?",["1987","1989","1991","1993"],1,"The Berlin Wall fell on November 9, 1989.","It happened near the end of the 1980s.",250),
  q("m7","master","Language","Medium","What is the most widely spoken native language?",["English","Hindi","Spanish","Mandarin Chinese"],3,"Mandarin has the greatest number of native speakers.","It is widely spoken in China.",250),
  q("m8","master","Art","Medium","Who painted The Starry Night?",["Claude Monet","Vincent van Gogh","Pablo Picasso","Salvador Dalí"],1,"Van Gogh painted it in 1889.","The artist was Dutch.",250),
  q("m9","master","History","Hard","Which treaty formally ended World War I?",["Treaty of Paris","Treaty of Versailles","Treaty of Rome","Treaty of Vienna"],1,"The Treaty of Versailles was signed in 1919.","It was signed in a French palace.",500),
  q("m10","master","Geography","Hard","What is the smallest sovereign country by area?",["Monaco","San Marino","Vatican City","Liechtenstein"],2,"Vatican City covers about 0.49 square kilometres.","It sits inside Rome.",500),
  q("m11","master","Music","Hard","How many semitones are in a standard octave?",["8","10","12","14"],2,"Western chromatic music divides an octave into 12 semitones.","Count every piano key between matching notes.",500),
  q("m12","master","Mathematics","Hard","Which number is both a square and a cube?",["36","48","64","81"],2,"64 is 8 squared and 4 cubed.","It is a power of two.",500),
  q("m13","master","History","Expert","The Peace of Westphalia ended which conflict?",["Hundred Years' War","Thirty Years' War","Crimean War","War of Roses"],1,"The 1648 treaties ended the Thirty Years' War.","Its duration is in the name.",1000),
  q("m14","master","Literature","Expert","Who created the fictional detective C. Auguste Dupin?",["Arthur Conan Doyle","Edgar Allan Poe","Agatha Christie","Wilkie Collins"],1,"Poe introduced Dupin in The Murders in the Rue Morgue.","This American author also wrote The Raven.",1000),
  q("m15","master","Geography","Expert","Which sea has no land boundaries?",["Sargasso Sea","Coral Sea","Arabian Sea","Weddell Sea"],0,"The Sargasso Sea is defined by Atlantic ocean currents.","Its boundaries are currents.",1000),
  q("r1","rapid","Capitals","Easy","What is the capital of Japan?",["Seoul","Beijing","Tokyo","Bangkok"],2,"Tokyo is Japan's capital.","Home of Shibuya Crossing.",500),
  q("r2","rapid","Numbers","Easy","What is 9 × 7?",["56","63","72","67"],1,"Nine multiplied by seven is 63.","It is one less than 8 squared.",500),
  q("r3","rapid","Nature","Easy","Which animal is known for black and white stripes?",["Zebra","Tiger","Panda","Skunk"],0,"Zebras have distinctive striped coats.","It is related to the horse.",500),
  q("r4","rapid","Language","Easy","Which word is the opposite of ancient?",["Old","Modern","Historic","Ruined"],1,"Modern is an antonym of ancient.","Think present-day.",500),
  q("r5","rapid","Geography","Medium","Which ocean is the largest?",["Atlantic","Indian","Pacific","Arctic"],2,"The Pacific is Earth's largest ocean.","It borders Asia and the Americas.",500),
  q("r6","rapid","Sport","Medium","How many players start on a football team on the field?",["9","10","11","12"],2,"Each football side fields 11 players.","One goalkeeper plus ten outfield players.",500),
  q("r7","rapid","Technology","Medium","What does CPU stand for?",["Central Processing Unit","Computer Power Utility","Core Program User","Central Program Upload"],0,"CPU means Central Processing Unit.","It processes instructions.",500),
  q("r8","rapid","Culture","Hard","Origami originated in which country?",["China","Japan","Korea","Thailand"],1,"Origami is the Japanese art of paper folding.","Its name combines Japanese words for folding and paper.",500),
  q("r9","rapid","History","Hard","Who was the first person to walk on the Moon?",["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","John Glenn"],2,"Neil Armstrong stepped onto the Moon in 1969.","He commanded Apollo 11.",500),
  q("r10","rapid","Nature","Hard","How many hearts does an octopus have?",["One","Two","Three","Four"],2,"An octopus has three hearts.","More than two, fewer than four.",500),
  q("b1","brain","Sequence","Easy","What comes next: 2, 4, 8, 16, ?",["20","24","32","36"],2,"Each number doubles.","Multiply the previous number by two.",100),
  q("b2","brain","Odd one out","Easy","Which number does not belong?",["4","9","16","20"],3,"4, 9 and 16 are perfect squares; 20 is not.","Three options are perfect squares.",100),
  q("b3","brain","Pattern","Easy","Complete the pattern: A, C, E, G, ?",["H","I","J","K"],1,"The pattern skips one letter each time.","Skip H.",100),
  q("b4","brain","Coding","Medium","If CAT becomes DBU, what does DOG become?",["EPH","EOH","FPI","CPH"],0,"Each letter moves one step forward.","Shift every letter by +1.",250),
  q("b5","brain","Sequence","Medium","What comes next: 1, 4, 9, 16, ?",["20","24","25","32"],2,"These are consecutive square numbers.","The terms are 1², 2², 3², 4².",250),
  q("b6","brain","Logic","Medium","All roses are flowers. Some flowers fade quickly. What must be true?",["All roses fade quickly","No roses fade quickly","Roses are flowers","All flowers are roses"],2,"Only the first statement guarantees that roses are flowers.","Use only what is explicitly universal.",250),
  q("b7","brain","Sequence","Hard","Find the next number: 3, 6, 11, 18, 27, ?",["36","38","40","42"],1,"Differences are +3, +5, +7, +9, then +11.","Look at the odd-number differences.",500),
  q("b8","brain","Logic","Hard","A clock shows 3:15. What is the smaller angle between the hands?",["0°","7.5°","15°","22.5°"],1,"The hour hand moves 7.5° past 3 while the minute hand is at 3.","The hour hand moves continuously.",500),
  q("b9","brain","Coding","Hard","If MASTER is coded 13-1-19-20-5-18, what is BRAIN?",["2-18-1-9-14","2-17-1-8-13","3-18-2-9-14","2-18-1-10-14"],0,"Each letter is replaced by its alphabet position.","A=1, B=2.",500),
  q("b10","brain","Logic","Expert","Five machines make five parts in five minutes. How long for 100 machines to make 100 parts?",["5 minutes","20 minutes","100 minutes","500 minutes"],0,"Each machine makes one part in five minutes.","Scale machines and parts equally.",1000),
  q("s1","science","Physics","Easy","Which force pulls objects toward Earth?",["Friction","Gravity","Magnetism","Tension"],1,"Gravity attracts masses toward each other.","It keeps you on the ground.",100),
  q("s2","science","Chemistry","Easy","What is the chemical symbol for water?",["CO₂","O₂","H₂O","NaCl"],2,"Water contains two hydrogen atoms and one oxygen atom.","Two H atoms and one O atom.",100),
  q("s3","science","Biology","Easy","Which organ pumps blood around the body?",["Lungs","Brain","Heart","Liver"],2,"The heart drives the circulatory system.","It beats rhythmically.",100),
  q("s4","science","Space","Easy","Which planet is known as the Red Planet?",["Venus","Mars","Jupiter","Mercury"],1,"Iron minerals make Mars appear reddish.","It is Earth's outer neighbour.",100),
  q("s5","science","Physics","Medium","What is the SI unit of electric current?",["Volt","Ampere","Ohm","Watt"],1,"Electric current is measured in amperes.","Often shortened to amp.",250),
  q("s6","science","Chemistry","Medium","A substance with pH 3 is best described as?",["Acidic","Neutral","Alkaline","Metallic"],0,"A pH below 7 is acidic.","It is below neutral 7.",250),
  q("s7","science","Biology","Medium","Where does photosynthesis mainly occur in plant cells?",["Nucleus","Mitochondria","Chloroplasts","Ribosomes"],2,"Chloroplasts contain chlorophyll and perform photosynthesis.","Look for the organelle containing chlorophyll.",250),
  q("s8","science","Space","Medium","What type of galaxy is the Milky Way?",["Elliptical","Spiral","Irregular","Ring"],1,"The Milky Way is a barred spiral galaxy.","Its arms curve around a center.",250),
  q("s9","science","Physics","Hard","Which particle carries the electromagnetic force?",["Photon","Gluon","Neutrino","Boson W"],0,"Photons mediate the electromagnetic interaction.","It is also a quantum of light.",500),
  q("s10","science","Chemistry","Hard","What is the atomic number of carbon?",["4","6","8","12"],1,"Carbon has six protons, so its atomic number is 6.","Count its protons.",500),
  q("s11","science","Biology","Hard","Which process produces genetically identical daughter cells?",["Meiosis","Mitosis","Fertilization","Mutation"],1,"Mitosis creates two genetically identical daughter cells.","It supports growth and repair.",500),
  q("s12","science","Space","Hard","What is the boundary around a black hole called?",["Photon belt","Event horizon","Accretion line","Gravity shell"],1,"The event horizon is the boundary beyond which escape is impossible.","Events beyond it cannot affect an outside observer.",500),
  q("s13","science","Physics","Expert","What principle states that position and momentum cannot both be exactly known?",["Pauli exclusion","Uncertainty principle","Relativity","Superposition"],1,"Heisenberg's uncertainty principle links position and momentum precision.","Associated with Heisenberg.",1000),
  q("s14","science","Chemistry","Expert","Which geometry does methane have?",["Linear","Trigonal planar","Tetrahedral","Octahedral"],2,"Four C–H bonds arrange tetrahedrally.","Four equal bonds spread in three dimensions.",1000),
  q("s15","science","Biology","Expert","Which enzyme unwinds DNA during replication?",["Ligase","Helicase","Polymerase","Amylase"],1,"Helicase separates the two DNA strands.","Its name hints at the double helix.",1000),
  q("s16","science","Space","Expert","What supports a white dwarf against gravitational collapse?",["Thermal pressure","Electron degeneracy pressure","Dark energy","Nuclear fusion"],1,"Electron degeneracy pressure supports white dwarfs.","It follows the Pauli exclusion principle.",1000),
];

export const modeMeta = {
  master: { name: "The Master Quiz", short: "Master Quiz", icon: "Trophy", description: "Climb the ladder. Answer correctly. Earn more coins.", accent: "gold", difficulty: "Rising · 15 questions" },
  rapid: { name: "Rapid Fire", short: "Rapid Fire", icon: "Zap", description: "Think fast. Answer faster.", accent: "cyan", difficulty: "Fast · 10 seconds" },
  brain: { name: "Brain Battle", short: "Brain Battle", icon: "Brain", description: "Challenge your logic and reasoning.", accent: "coral", difficulty: "Clever · 10 questions" },
  science: { name: "Science Master", short: "Science Master", icon: "FlaskConical", description: "Test your knowledge of the world of science.", accent: "green", difficulty: "Progressive · 4 fields" },
} as const;

export const masterRewards = [100,200,500,1000,2000,3000,5000,7500,10000,15000,25000,40000,60000,80000,100000];

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    const replacement = copy[j];
    if (current === undefined || replacement === undefined) continue;
    copy[i] = replacement;
    copy[j] = current;
  }
  return copy;
}

export function prepareQuestions(mode: GameMode): Question[] {
  const pool = questions.filter((item) => item.mode === mode);
  const order: Difficulty[] = mode === "master"
    ? ["Easy","Easy","Easy","Easy","Medium","Medium","Medium","Medium","Hard","Hard","Hard","Hard","Expert","Expert","Expert"]
    : mode === "science"
      ? ["Easy","Easy","Easy","Easy","Medium","Medium","Medium","Medium","Hard","Hard","Hard","Hard","Expert","Expert","Expert","Expert"]
      : ["Easy","Easy","Easy","Medium","Medium","Medium","Hard","Hard","Hard","Expert"];
  const selected: Question[] = [];
  order.forEach((difficulty, index) => {
    const matching = shuffle(pool.filter((item) => item.difficulty === difficulty));
    const item = matching[index % matching.length];
    if (item) selected.push(item);
  });
  return selected.map((item) => {
    const indexed = item.options.map((option, index) => ({ option, correct: index === item.answer }));
    const randomized = shuffle(indexed);
    return { ...item, options: randomized.map((entry) => entry.option), answer: randomized.findIndex((entry) => entry.correct) };
  });
}
