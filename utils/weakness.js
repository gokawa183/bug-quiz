const LS_KEY = "vbBugHunterWeaknesses";

export function loadWeaknesses() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch { return {}; }
}

export function saveWeakness(questionId, category) {
  const data = loadWeaknesses();
  if (!data[questionId]) data[questionId] = { count: 0, category };
  data[questionId].count += 1;
  localStorage.setItem(LS_KEY, JSON.stringify(data));
  return { ...data };
}

export function clearWeaknesses() {
  localStorage.removeItem(LS_KEY);
  return {};
}
