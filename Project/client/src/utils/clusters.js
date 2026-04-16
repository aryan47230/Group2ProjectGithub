const CLUSTER_KEYWORDS = {
  Science: ['physics', 'chemistry', 'biology', 'quantum', 'science', 'experiment', 'atom', 'molecule', 'evolution', 'genetics'],
  Technology: ['technology', 'computing', 'software', 'internet', 'engineering', 'computer', 'algorithm', 'digital', 'electrical'],
  Mathematics: ['mathematics', 'algebra', 'geometry', 'theorem', 'calculus', 'statistics', 'logic', 'number', 'equation'],
  History: ['history', 'war', 'century', 'ancient', 'empire', 'dynasty', 'civilization', 'revolution', 'medieval'],
  Philosophy: ['philosophy', 'ethics', 'logic', 'metaphysics', 'epistemology', 'consciousness', 'ontology', 'moral'],
  Art: ['art', 'music', 'literature', 'film', 'culture', 'painting', 'poetry', 'architecture', 'cinema'],
  Society: ['society', 'politics', 'economics', 'law', 'social', 'government', 'democracy', 'culture', 'religion'],
};

export function assignCluster(categories = []) {
  const text = categories.join(' ').toLowerCase();
  let best = 'Other';
  let bestScore = 0;
  for (const [cluster, keywords] of Object.entries(CLUSTER_KEYWORDS)) {
    const score = keywords.filter((kw) => text.includes(kw)).length;
    if (score > bestScore) { bestScore = score; best = cluster; }
  }
  return best;
}
