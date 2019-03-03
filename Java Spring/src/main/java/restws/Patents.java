package restws;
public class Patents{
	private String applicationType;
    private String documentId;
    private String applicationNumber;
    private String documentType;
    private String title;
    private String year;
    private String[] assignee;
    private String publicationDate;
    
    public void setAssignee(String[] assignee) {
		this.assignee = assignee;
	}
    
    public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}
    
	public void setApplicationType(String applicationType) {
		this.applicationType = applicationType;
	}
	
	public void setApplicationNumber(String applicationNumber) {
		this.applicationNumber = applicationNumber;
	}
	
	public void setDocumentId(String documentId) {
		this.documentId = documentId;
	}
	
	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}
	
	public void setYear(String year){
		this.year = year;
	}
	
	public void setTitle(String title){
		this.title = title;
	}
	
    public String getApplicationType() {
        return applicationType;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    } 
    
    public String getDocumentId() {
        return documentId;
    }
    
    public String getDocumentType() {
        return documentType;
    }
    
    public String getTitle() {
        return title;
    }
    
    public String getYear() {
        return year;
    }
    
    public String[] getAssignee() {
		return assignee;
	}
    
    public String getPublicationDate() {
		return publicationDate;
	}
}