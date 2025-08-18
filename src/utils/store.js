const KEYS = {
  metas: 'cf_metas',
  transacoes: 'cf_transacoes',
}

function safeParse(json, fallback) {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

function readArray(key) {
  if (typeof window === 'undefined') return []
  const raw = window.localStorage.getItem(key)
  if (!raw) return []
  const parsed = safeParse(raw, [])
  return Array.isArray(parsed) ? parsed : []
}

function write(key, value) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const Store = {
  getMetas() {
    return readArray(KEYS.metas)
  },
  setMetas(metas) {
    write(KEYS.metas, metas)
  },
  addMeta(meta) {
    const list = readArray(KEYS.metas)
    list.push(meta)
    write(KEYS.metas, list)
    return list
  },

  getTransacoes() {
    const arr = readArray(KEYS.transacoes)
    return arr.map((t) => ({
      ...t,
      data: t && t.data ? new Date(t.data) : new Date(),
    }))
  },
  setTransacoes(transacoes) {
    const toSave = transacoes.map((t) => ({
      ...t,
      data: t && t.data instanceof Date ? t.data.toISOString() : t.data,
    }))
    write(KEYS.transacoes, toSave)
  },
  addTransacao(tx) {
    const list = readArray(KEYS.transacoes)
    const toPush = {
      ...tx,
      data: tx && tx.data instanceof Date ? tx.data.toISOString() : tx.data,
    }
    list.push(toPush)
    write(KEYS.transacoes, list)
    return list.map((t) => ({ ...t, data: new Date(t.data) }))
  },
}

export default Store
