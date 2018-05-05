var adjectives = ['quizzical', 'highfalutin', 'dynamic', 'wakeful', 'cheerful', 'thoughtful', 'cooperative', 'questionable', 'abundant', 'uneven', 'yummy', 'juicy', 'vacuous', 'concerned', 'young', 'sparkling', 'abhorrent', 'sweltering', 'late', 'macho', 'scrawny', 'friendly', 'kaput', 'divergent', 'busy', 'charming', 'protective', 'premium', 'puzzled', 'waggish', 'rambunctious', 'puffy', 'hard', 'fat', 'sedate', 'yellow', 'resonant', 'dapper', 'courageous', 'vast', 'cool', 'elated', 'wary', 'bewildered', 'level', 'wooden', 'ceaseless', 'tearful', 'cloudy', 'gullible', 'flashy', 'trite', 'quick', 'nondescript', 'round', 'slow', 'spiritual', 'brave', 'tenuous', 'abstracted', 'colossal', 'sloppy', 'obsolete', 'elegant', 'fabulous', 'vivacious', 'exuberant', 'faithful', 'helpless', 'odd', 'sordid', 'blue', 'imported', 'ugly', 'ruthless', 'deeply', 'eminent', 'reminiscent', 'rotten', 'sour', 'volatile', 'succinct', 'judicious', 'abrupt', 'learned', 'stereotyped', 'evanescent', 'efficacious', 'festive', 'loose', 'torpid', 'condemned', 'selective', 'strong', 'momentous', 'ordinary', 'dry', 'great', 'ultra', 'ahead', 'broken', 'dusty', 'piquant', 'creepy', 'miniature', 'periodic', 'equable', 'unsightly', 'narrow', 'grieving', 'whimsical', 'fantastic', 'kindhearted', 'miscreant', 'cowardly', 'cloistered', 'marked', 'bloody', 'chunky', 'undesirable', 'oval', 'nauseating', 'aberrant', 'stingy', 'standing', 'distinct', 'illegal', 'angry', 'faint', 'rustic', 'few', 'calm', 'gorgeous', 'mysterious', 'tacky', 'unadvised', 'greasy', 'minor', 'loving', 'melodic', 'flat', 'wretched', 'clever', 'barbarous', 'pretty', 'endurable', 'handsomely', 'unequaled', 'acceptable', 'symptomatic', 'hurt', 'tested', 'long', 'warm', 'ignorant', 'ashamed', 'excellent', 'known', 'adamant', 'eatable', 'verdant', 'meek', 'unbiased', 'rampant', 'somber', 'cuddly', 'harmonious', 'salty', 'overwrought', 'stimulating', 'beautiful', 'crazy', 'grouchy', 'thirsty', 'joyous', 'confused', 'terrible', 'high', 'unarmed', 'gabby', 'wet', 'sharp', 'wonderful', 'magenta', 'tan', 'huge', 'productive', 'defective', 'chilly', 'needy', 'imminent', 'flaky', 'fortunate', 'neighborly', 'hot', 'husky', 'optimal', 'gaping', 'faulty', 'guttural', 'massive', 'watery', 'abrasive', 'ubiquitous', 'aspiring', 'impartial', 'annoyed', 'billowy', 'lucky', 'panoramic', 'heartbreaking', 'fragile', 'purring', 'wistful', 'burly', 'filthy', 'psychedelic', 'harsh', 'disagreeable', 'ambiguous', 'short', 'splendid', 'crowded', 'light', 'yielding', 'hypnotic', 'dispensable', 'deserted', 'nonchalant', 'green', 'puny', 'deafening', 'classy', 'tall', 'typical', 'exclusive', 'materialistic', 'mute', 'shaky', 'inconclusive', 'rebellious', 'doubtful', 'telling', 'unsuitable', 'woebegone', 'cold', 'sassy', 'arrogant', 'perfect', 'adhesive', 'industrious', 'crabby', 'curly', 'voiceless', 'nostalgic', 'better', 'slippery', 'willing', 'nifty', 'orange', 'victorious', 'ritzy', 'wacky', 'vigorous', 'spotless', 'good', 'powerful', 'bashful', 'soggy', 'grubby', 'moaning', 'placid', 'permissible', 'half', 'towering', 'bawdy', 'measly', 'abaft', 'delightful', 'goofy', 'capricious', 'nonstop', 'addicted', 'acoustic', 'furtive', 'erratic', 'heavy', 'square', 'delicious', 'needless', 'resolute', 'innocent', 'abnormal', 'hurried', 'awful', 'impossible', 'aloof', 'giddy', 'large', 'pointless', 'petite', 'jolly', 'boundless', 'abounding', 'hilarious', 'heavenly', 'honorable', 'squeamish', 'red', 'phobic', 'trashy', 'pathetic', 'parched', 'godly', 'greedy', 'pleasant', 'small', 'aboriginal', 'dashing', 'icky', 'bumpy', 'laughable', 'hapless', 'silent', 'scary', 'shaggy', 'organic', 'unbecoming', 'inexpensive', 'wrong', 'repulsive', 'flawless', 'labored', 'disturbed', 'aboard', 'gusty', 'loud', 'jumbled', 'exotic', 'vulgar', 'threatening', 'belligerent', 'synonymous', 'encouraging', 'fancy', 'embarrassed', 'clumsy', 'fast', 'ethereal', 'chubby', 'high-pitched', 'plastic', 'open', 'straight', 'little', 'ancient', 'fair', 'psychotic', 'murky', 'earthy', 'callous', 'heady', 'lamentable', 'hallowed', 'obtainable', 'toothsome', 'oafish', 'gainful', 'flippant', 'tangy', 'tightfisted', 'damaging', 'utopian', 'gaudy', 'brainy', 'imperfect', 'shiny', 'fanatical', 'snotty', 'relieved', 'shallow', 'foamy', 'parsimonious', 'gruesome', 'elite', 'wide', 'kind', 'bored', 'tangible', 'depressed', 'boring', 'screeching', 'outrageous', 'determined', 'picayune', 'glossy', 'historical', 'staking', 'curious', 'gigantic', 'wandering', 'profuse', 'vengeful', 'glib', 'unaccountable', 'frightened', 'outstanding', 'chivalrous', 'workable', 'modern', 'swanky', 'comfortable', 'gentle', 'substantial', 'brawny', 'curved', 'nebulous', 'boorish', 'afraid', 'fierce', 'efficient', 'lackadaisical', 'recondite', 'internal', 'absorbed', 'squealing', 'frail', 'thundering', 'wanting', 'cooing', 'axiomatic', 'debonair', 'boiling', 'tired', 'numberless', 'flowery', 'mushy', 'enthusiastic', 'proud', 'upset', 'hungry', 'astonishing', 'deadpan', 'prickly', 'mammoth', 'absurd', 'clean', 'jittery', 'wry', 'entertaining', 'literate', 'lying', 'uninterested', 'aquatic', 'super', 'languid', 'cute', 'absorbing', 'scattered', 'brief', 'halting', 'bright', 'fuzzy', 'lethal', 'scarce', 'aggressive', 'obsequious', 'fine', 'giant', 'holistic', 'pastoral', 'stormy', 'quaint', 'nervous', 'wasteful', 'grotesque', 'loutish', 'abiding', 'unable', 'black', 'dysfunctional', 'knowledgeable', 'truculent', 'various', 'luxuriant', 'shrill', 'spiffy', 'guarded', 'colorful', 'misty', 'spurious', 'freezing', 'glamorous', 'famous', 'new', 'instinctive', 'nasty', 'exultant', 'seemly', 'tawdry', 'maniacal', 'wrathful', 'shy', 'nutritious', 'idiotic', 'worried', 'bad', 'stupid', 'ruddy', 'wholesale', 'naughty', 'thoughtless', 'futuristic', 'available', 'slimy', 'cynical', 'fluffy', 'plausible', 'nasty', 'tender', 'changeable', 'smiling', 'oceanic', 'satisfying', 'steadfast', 'ugliest', 'crooked', 'subsequent', 'fascinated', 'woozy', 'teeny', 'quickest', 'moldy', 'uppity', 'sable', 'horrible', 'silly', 'ad hoc', 'numerous', 'berserk', 'wiry', 'knowing', 'lazy', 'childlike', 'zippy', 'fearless', 'pumped', 'weak', 'tacit', 'weary', 'rapid', 'precious', 'smoggy', 'swift', 'lyrical', 'steep', 'quack', 'direful', 'talented', 'hesitant', 'fallacious', 'ill', 'quarrelsome', 'quiet', 'flipped-out', 'didactic', 'fluttering', 'glorious', 'tough', 'sulky', 'elfin', 'abortive', 'sweet', 'habitual', 'supreme', 'hollow', 'possessive', 'inquisitive', 'adjoining', 'incandescent', 'lowly', 'majestic', 'bizarre', 'acrid', 'expensive', 'aback', 'unusual', 'foolish', 'jobless', 'capable', 'damp', 'political', 'dazzling', 'erect', 'Early', 'immense', 'hellish', 'omniscient', 'reflective', 'lovely', 'incompetent', 'empty', 'breakable', 'educated', 'easy', 'devilish', 'assorted', 'decorous', 'jaded', 'homely', 'dangerous', 'adaptable', 'coherent', 'dramatic', 'tense', 'abject', 'fretful', 'troubled', 'diligent', 'solid', 'plain', 'raspy', 'irate', 'offbeat', 'healthy', 'melted', 'cagey', 'many', 'wild', 'venomous', 'animated', 'alike', 'youthful', 'ripe', 'alcoholic', 'sincere', 'teeny-tiny', 'lush', 'defeated', 'zonked', 'foregoing', 'dizzy', 'frantic', 'obnoxious', 'funny', 'damaged', 'grandiose', 'spectacular', 'maddening', 'defiant', 'makeshift', 'strange', 'painstaking', 'merciful', 'madly', 'clammy', 'itchy', 'difficult', 'clear', 'used', 'temporary', 'abandoned', 'null', 'rainy', 'evil', 'alert', 'domineering', 'amuck', 'rabid', 'jealous', 'robust', 'obeisant', 'overt', 'enchanting', 'longing', 'cautious', 'motionless', 'bitter', 'anxious', 'craven', 'breezy', 'ragged', 'skillful', 'quixotic', 'knotty', 'grumpy', 'dark', 'draconian', 'alluring', 'magical', 'versed', 'humdrum', 'accurate', 'ludicrous', 'sleepy', 'envious', 'lavish', 'roasted', 'thinkable', 'overconfident', 'roomy', 'painful', 'wee', 'observant', 'old-fashioned', 'drunk', 'royal', 'likeable', 'adventurous', 'eager', 'obedient', 'attractive', 'x-rated', 'spooky', 'poised', 'righteous', 'excited', 'real', 'abashed', 'womanly', 'ambitious', 'lacking', 'testy', 'big', 'gamy', 'early', 'auspicious', 'blue-eyed', 'discreet', 'nappy', 'vague', 'helpful', 'nosy', 'perpetual', 'disillusioned', 'overrated', 'gleaming', 'tart', 'soft', 'agreeable', 'therapeutic', 'accessible', 'poor', 'gifted', 'old', 'humorous', 'flagrant', 'magnificent', 'alive', 'understood', 'economic', 'mighty', 'ablaze', 'racial', 'tasteful', 'purple', 'broad', 'lean', 'legal', 'witty', 'nutty', 'icy', 'feigned', 'redundant', 'adorable', 'apathetic', 'jumpy', 'scientific', 'combative', 'worthless', 'tasteless', 'voracious', 'jazzy', 'uptight', 'utter', 'hospitable', 'imaginary', 'finicky', 'shocking', 'dead', 'noisy', 'shivering', 'subdued', 'rare', 'zealous', 'demonic', 'ratty', 'snobbish', 'deranged', 'muddy', 'whispering', 'credible', 'hulking', 'fertile', 'tight', 'abusive', 'functional', 'obscene', 'thankful', 'daffy', 'smelly', 'lively', 'homeless', 'secretive', 'amused', 'lewd', 'mere', 'agonizing', 'sad', 'innate', 'sneaky', 'noxious', 'illustrious', 'alleged', 'cultured', 'tame', 'macabre', 'lonely', 'mindless', 'low', 'scintillating', 'statuesque', 'decisive', 'rhetorical', 'hysterical', 'happy', 'earsplitting', 'mundane', 'spicy', 'overjoyed', 'taboo', 'peaceful', 'forgetful', 'elderly', 'upbeat', 'squalid', 'warlike', 'dull', 'plucky', 'handsome', 'groovy', 'absent', 'wise', 'romantic', 'invincible', 'receptive', 'smooth', 'different', 'tiny', 'cruel', 'dirty', 'mature', 'faded', 'tiresome', 'wicked', 'average', 'panicky', 'detailed', 'juvenile', 'scandalous', 'steady', 'wealthy', 'deep', 'sticky', 'jagged', 'wide-eyed', 'tasty', 'disgusted', 'garrulous', 'graceful', 'tranquil', 'annoying', 'hissing', 'noiseless', 'selfish', 'onerous', 'lopsided', 'ossified', 'penitent', 'malicious', 'aromatic', 'successful', 'zany', 'evasive', 'wet', 'naive', 'nice', 'uttermost', 'brash', 'muddled', 'energetic', 'accidental', 'silky', 'guiltless', 'important', 'drab', 'aware', 'skinny', 'careful', 'rightful', 'tricky', 'sore', 'rich', 'blushing', 'stale', 'daily', 'watchful', 'uncovered', 'rough', 'fresh', 'hushed', 'rural']
function chooseRand(lst) {
  return lst[Math.floor(Math.random() * lst.length)];
}

$(document).ready(function(){
  $("span#adjective").text(chooseRand(adjectives));
});
