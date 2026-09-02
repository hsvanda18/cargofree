const base = {
  fill: 'none',
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconTruck(props) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M3 8h14v13H3z" />
      <path d="M17 13h6l5 5v3h-3" />
      <path d="M3 21h1" />
      <circle cx="10" cy="24" r="2.4" />
      <circle cx="23" cy="24" r="2.4" />
      <path d="M12.4 24h8.2" />
    </svg>
  )
}

export function IconShip(props) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M5 17h22l-3 8H8z" />
      <path d="M10 17V7h9l4 10" />
      <path d="M14 7V3h3v4" />
      <path d="M4 25c2 1.6 4 1.6 6 0s4-1.6 6 0 4 1.6 6 0 4-1.6 6 0" />
    </svg>
  )
}

export function IconPlane(props) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M4 18l24-9-6 10 6 10-24-9 3-1z" />
      <path d="M4 18l7 2" />
    </svg>
  )
}

export function IconDocument(props) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M8 3h11l5 5v21H8z" />
      <path d="M19 3v5h5" />
      <path d="M12 16h8M12 20h8M12 24h5" />
    </svg>
  )
}

export function IconRoute(props) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <circle cx="7" cy="8" r="3" />
      <circle cx="25" cy="24" r="3" />
      <path d="M9.5 10c3 4 4 6 7 8s6.5 2.5 8.5 6" strokeDasharray="1 5.5" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 13l5 5L20 6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 4h3.4l1.6 4.5-2.2 2A12 12 0 0 0 13.5 16l2-2.2L20 15.6V19a2 2 0 0 1-2.2 2C9.7 20.3 3.7 14.3 3 6.2A2 2 0 0 1 5 4z" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 5h16v14H4z" />
      <path d="M4 6l8 7 8-7" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4.5 20 6 15.8A8 8 0 1 1 9.3 18.9L4.5 20z" />
      <path d="M8.7 8.6c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4s.7 1.7.8 1.8.1.3 0 .5-.2.3-.4.5-.4.4-.2.7c.2.3 1 1.6 2.1 2.2s1.4.6 1.6.4.7-.6 1-.9.5-.3.8-.2 1.9.9 2.2 1 .5.2.5.5-.2 1.1-.6 1.5c-.4.4-1.1.7-1.9.7-.9 0-2.6-.4-4.5-2.1s-2.9-3.6-3.1-4.2-.2-1.5.1-2.1z" />
    </svg>
  )
}
