import "./CompanyList.css"

const CompanyList = ({data}) => {

  return (
      <div>
          <h2>Companies</h2>
          <table>
              <tbody>
                  <tr className="header-row">
                      <th>Name</th>
                      <th>Status</th>
                      <th>Application URL</th>
                      <th>Notes</th>
                      <th>Point of Contacts</th>
                  </tr>
                  {data.map((company, index) => (
                      <tr key={index} className="data-rows">
                          <td>{company.name}</td>
                          <td>{company.status}</td>
                          <td><a href={company.url} target="_blank">
                            {company.url}
                            </a>
                            </td>
                          <td>{company.notes}</td>
                          <td>{company.contact}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}

export default CompanyList